import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Chip } from "@mui/material";
import { drawerWidth } from "src/consts";

export const HeaderHead = styled(Box)(
    (): CSSObject => ({
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
    }),
);

export const HeaderChip = styled(Chip)(
    (): CSSObject => ({
        ml: 'auto',
        height: '48px',
        alignItems: 'center',
        borderRadius: '24px',
        cursor: 'pointer',
        lineHeight: 0,
    }),
);