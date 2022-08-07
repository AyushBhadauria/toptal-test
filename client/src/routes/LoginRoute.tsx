import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'src/hooks/hooks';
import { selectAuth } from 'src/store/auth/authSlice';

const LoginRoute = ({ component }: { component: JSX.Element }) => {
    const auth = useAppSelector(selectAuth);
    const location = useLocation();

    if (auth.isLoggedIn) {
        return <Navigate to='/' state={{ from: location }} replace />;
    }

    return component;
};

export default LoginRoute;
