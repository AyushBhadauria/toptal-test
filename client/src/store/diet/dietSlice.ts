import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from 'src/service/api';
import type { RootState } from 'src/store';

interface DietListState {
    isLoading: boolean;
    dietList: UserDiet[];
    error: string | Error | null;
}

const initialState: DietListState = {
    isLoading: false,
    dietList: [],
    error: null,
};

export const fetchDietList = createAsyncThunk<UserDiet[], DietListParams | undefined>(
    '/diet-list',
    async (params?: DietListParams) => {
        const response = await api.get('/diet-list', { params });
        return response.data as UserDiet[];
    }
);

export const dietSlice = createSlice({
    name: 'dietList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDietList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchDietList.fulfilled,
                (state, action: PayloadAction<UserDiet[]>) => {
                    state.isLoading = false;
                    state.dietList = action.payload;
                }
            )
            .addCase(fetchDietList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message ?? 'error';
        });
    },
});

// selector
export const selectDiet = (state: RootState) => state.diet;

// reducer
export default dietSlice.reducer;
