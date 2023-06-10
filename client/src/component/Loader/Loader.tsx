import { CircularProgress} from '@mui/material';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => (
  <LoaderStyled>
    <CircularProgress />
  </LoaderStyled>
);
