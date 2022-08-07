import { useEffect, useState } from 'react';
import {
    Container,
    Box,
    Button,
} from '@mui/material';

import Loader from 'src/component/Loader';
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks';
import { fetchDietList, selectDiet } from 'src/store/diet/dietSlice';
import { AddAlertOutlined } from '@mui/icons-material';
import CreateDiet from 'src/component/CreateDiet';
import DietService from 'src/service/dietService';
import DietListFilter from './DielListFilter';
import Title from 'src/component/Title';
import { dietListColumns } from './DietList.business';
import AppTable from 'src/component/AppTable';

export const DietListContainer = () => {
    // state
    const [isModalOpen, setModalState] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);

    // redux store
    const dispatch = useAppDispatch();
    const { isLoading, dietList } = useAppSelector(selectDiet);

    const getDietList = (params?: DietListParams ) => {
        if (!isLoading) {
            dispatch(fetchDietList(params!));
        }
    };
    const onModalToggle = () => setModalState(!isModalOpen);

    useEffect(getDietList, []);

    const onSubmit = async (body: ICalorieFormInput) => {
        setSubmitting(true)
      DietService.create(body)
      .then(res => {
        setSubmitting(false);
        onModalToggle();
        getDietList();
      })
      .catch(error => {
        setSubmitting(false);
      })
    }

    return (
        <Container sx={{ py: 2 }} maxWidth={false}>
            <Box display={'flex'}>
                <Title variant='h5'>Diet List</Title>
                <Button
                    disableElevation
                    sx={{ height: 'fit-content', alignSelf: 'center' }}
                    aria-describedby={'add-new'}
                    variant='contained'
                    startIcon={<AddAlertOutlined />}
                    onClick={onModalToggle}>
                    Add New
                </Button>
            </Box>
            <DietListFilter onSubmit={getDietList}/>
            {isLoading? <Loader /> : <AppTable name='DietList' columns={dietListColumns} rows={dietList}/>}
            <CreateDiet 
             isSubmitting={isSubmitting}
             isOpen={isModalOpen}
             onSubmit={onSubmit}
             onClose={onModalToggle} 
            />
        </Container>
    );
};
