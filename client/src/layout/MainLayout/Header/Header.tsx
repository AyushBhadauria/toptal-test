import {
    AppBar,
    Button,
    Toolbar,
    Typography,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { logout, selectAuth } from 'src/store/auth/authSlice';
import { selectDiet } from 'src/store/diet/dietSlice';
import { calculateTodayDietSum } from 'src/helpers/utils';
import Title from 'src/component/Title';
import CalorieText from 'src/component/CalorieText';
import { HeaderChip, HeaderHead } from './Header.styled';

export const Header = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(selectAuth);
    const { dietList } = useAppSelector(selectDiet);
    const totalCalories = calculateTodayDietSum(dietList);
    const handleOnLogout = () => { dispatch(logout()); };

    return (
        <AppBar
            position='fixed'
            elevation={0}
            sx={{ backgroundColor: 'background.paper' }}>
            <Toolbar>
                <HeaderHead> <Title variant='h6'>Calorie Meter</Title> </HeaderHead>
                <Title variant='h6'>
                    {user?.thresholdCalories ? <>Today's Meter: <CalorieText calories={totalCalories}></CalorieText> / <span>{user?.thresholdCalories} kcal</span></> : null}
                </Title> 
                <HeaderChip
                    label={<Typography>{user?.name}</Typography>}
                    variant='outlined'
                />
                <Button
                    disableElevation
                    variant='contained'
                    sx={{ ml: 2 }}
                    onClick={handleOnLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
