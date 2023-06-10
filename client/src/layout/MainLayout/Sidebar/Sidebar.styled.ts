import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Drawer } from "@mui/material";
import { drawerWidth } from "src/consts";

export const SidebarBox = styled(Box)(
    (): CSSObject => ({
        flexShrink: 0,
        width: drawerWidth,
    }),
);

export const SidebarDrawer = styled(Drawer)(
    (): CSSObject => ({
        width: drawerWidth,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '65px'
        },
    }),
);