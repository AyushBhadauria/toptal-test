import {Box, Typography} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { colors } from 'src/theme';

interface Props {
    variant: Variant;
    children?: any
}

const Title = ({ variant, children }: Props ) => (
    <Box flex={'1'}> <Typography color={colors.primaryText}  variant={variant}>{children}</Typography></Box>
);

export default Title;
