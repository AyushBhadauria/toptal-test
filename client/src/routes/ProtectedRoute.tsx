import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'src/hooks/hooks';
import { selectAuth } from 'src/store/auth/authSlice';

// ProtectedRoute:: Protected routes area accessible to logged in users only.
const ProtectedRoute = ({ component }: { component: JSX.Element }) => {
    const auth = useAppSelector(selectAuth);
    const location = useLocation();

    if (!auth.isLoggedIn) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return component;
};

export default ProtectedRoute;
