import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CreateDietBox = styled(Box)(
    (): CSSObject => ({
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        boxShadow: '24',
        padding: 20,
    }),
);