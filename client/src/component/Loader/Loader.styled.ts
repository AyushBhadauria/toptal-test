import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoaderStyled = styled(Box)(
    (): CSSObject => ({
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    }),
);