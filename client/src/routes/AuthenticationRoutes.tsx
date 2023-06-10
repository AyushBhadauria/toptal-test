import MinimalLayout from 'src/layout/MinimalLayout/index';
import Login from 'src/pages/Login';
import LoginRoute from './LoginRoute';

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <LoginRoute component={<Login />} />
        },
    ],
};

export default AuthenticationRoutes;
