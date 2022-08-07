import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

interface MenuProps {
    pathName: string;
    label: string;
    icon: JSX.Element;
}

const menuConfig: MenuProps[] = [
    { pathName: '/', label: 'Diet List', icon: <ListAltOutlinedIcon /> },
    { pathName: '/report', label: 'Report', icon: <AssessmentOutlinedIcon /> },
];

const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    function _Link(linkProps, ref) {
        return <Link ref={ref} {...linkProps} />;
    }
);

const MenuList = () => {
    return (
        <List>
            {menuConfig.map(({ label, pathName, icon }: MenuProps) => {
                return (
                    <ListItem key={label} disablePadding>
                        <ListItemButton component={CustomLink} to={pathName}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default MenuList;
