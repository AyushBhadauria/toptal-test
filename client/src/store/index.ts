import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'src/store/auth/authSlice';
import dietReducer from 'src/store/diet/dietSlice';
import adminDietReducer from 'src/store/adminDiet/adminDietSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        diet: dietReducer,
        adminDiet: adminDietReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
