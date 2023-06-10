import MenuList from './MenuList';
import { SidebarBox, SidebarDrawer } from './Sidebar.styled';

export const Sidebar = () => {
    return (
        <SidebarBox
            component='nav'
            aria-label='sidebar'>
            <SidebarDrawer
                open={true}
                variant={'persistent'}
                anchor='left'
                color='inherit'
                ModalProps={{ keepMounted: true }}>
                <MenuList />
            </SidebarDrawer>
        </SidebarBox>
    );
};
