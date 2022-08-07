import { useEffect } from 'react';

import { Container } from '@mui/material';
import { fetchDietList, selectDiet } from 'src/store/diet/dietSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import Title from 'src/component/Title';
import Loader from 'src/component/Loader';
import DietReportTable from './DietReportTable';

export const DietReportContainer = () => {
    const dispatch = useAppDispatch();
    const { isLoading, dietList } = useAppSelector(selectDiet);
    const getDietList = () => {
        if (!isLoading) {
            dispatch(fetchDietList());
        }
    };
    useEffect(getDietList, []);

    return (
        <Container sx={{ py: 2 }} maxWidth={false}>
           <Title variant='h5'>Report Diet</Title>
           {isLoading? <Loader /> : <DietReportTable dietList ={dietList} />}
        </Container>
    )
}

