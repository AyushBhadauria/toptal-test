import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from 'src/service/api';
import type { RootState } from 'src/store';

interface DietListState {
    isLoading: boolean;
    dietList: AdminDietListResponse;
    error: string | Error | null;
}

const initialState: DietListState = {
    isLoading: false,
    dietList: { count: 0, data: [] },
    error: null,
};

export const fetchAdminDietList = createAsyncThunk<AdminDietListResponse, number | undefined>(
    '/all-diets',
    async (page?: number) => {
        const response = await api.get('/all-diets', { params: (page && {page})} );
        return response.data as AdminDietListResponse;
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
                (state, action: PayloadAction<AdminDietListResponse>) => {
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
