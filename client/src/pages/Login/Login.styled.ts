import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoginBox = styled(Box)(
    (): CSSObject => ({
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
);
