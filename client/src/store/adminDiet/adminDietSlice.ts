import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from 'src/service/api';
import type { RootState } from 'src/store';

interface DietListState {
    isLoading: boolean;
    dietList: AdminDietList[];
    error: string | Error | null;
}

const initialState: DietListState = {
    isLoading: false,
    dietList: [],
    error: null,
};

export const fetchAdminDietList = createAsyncThunk<AdminDietList[]>(
    '/all-diets',
    async () => {
        const response = await api.get('/all-diets');
        return response.data as AdminDietList[];
    }
);

export const dietSlice = createSlice({
    name: 'dietList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminDietList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchAdminDietList.fulfilled,
                (state, action: PayloadAction<AdminDietList[]>) => {
                    state.isLoading = false;
                    state.dietList = action.payload;
                }
            )
            .addCase(fetchAdminDietList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message ?? 'error';
        });
    },
});

// selector
export const selectAdminDiet = (state: RootState) => state.adminDiet;

// reducer
export default dietSlice.reducer;
