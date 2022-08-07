import { useRoutes } from 'react-router-dom';

//routes
import AuthenticationRoutes from './AuthenticationRoutes';
import mainRoutes from './MainRoutes';

const Routes = () => useRoutes([mainRoutes(), AuthenticationRoutes]);

export default Routes;
