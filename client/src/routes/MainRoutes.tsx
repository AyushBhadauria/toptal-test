import { useAppSelector } from 'src/hooks/hooks';
import MainLayout from 'src/layout/MainLayout';
import UserDietList from 'src/pages/UserDietList';
import AdminDietList from 'src/pages/AdminDietList';
import UserReport from 'src/pages/UserReport';
import ProtectedRoute from 'src/routes/ProtectedRoute';
import { selectAuth } from 'src/store/auth/authSlice';
import AdminReportContainer from 'src/pages/AdminReport';

const MainRoutes =  () => {
    const auth = useAppSelector(selectAuth);

    return {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <ProtectedRoute component={auth.isAdmin ? <AdminDietList /> : <UserDietList />} />
            },
            {
                path: '/report',
                element: <ProtectedRoute component={auth.isAdmin ? <AdminReportContainer /> :<UserReport />} />
            },
        ],
    }
};

export default MainRoutes;
