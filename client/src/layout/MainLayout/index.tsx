
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from 'src/layout/MainLayout/Header';
import Sidebar from 'src/layout/MainLayout/Sidebar';


//--- Main Container ---//
const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    minHeight: 'calc(100vh - 65px)',
    marginTop: '65px',
    backgroundColor: theme.palette.grey[50],
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
    },
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
}));

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header/>
            <Sidebar/>
            <Main> <Outlet /> </Main>
        </Box>
    );
};

export default MainLayout;
