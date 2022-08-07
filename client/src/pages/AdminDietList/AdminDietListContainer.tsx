import { useEffect, useState } from 'react';
import { Container, Box, Tooltip } from '@mui/material';
import Loader from 'src/component/Loader';
import { useAppSelector, useAppDispatch } from 'src/hooks/hooks';
import CreateDiet from 'src/component/CreateDiet';
import DietService from 'src/service/dietService';
import Title from 'src/component/Title';
import { fetchAdminDietList, selectAdminDiet } from 'src/store/adminDiet/adminDietSlice';
import AdminDietTable from './AllDietsTable';
import {  Add, Create, Delete } from '@mui/icons-material';

export const AdminDietListContainer = () => {
    // state
    const [isModalOpen, setModalState] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [createItem, setCreateItem] = useState<AdminDietList | undefined>();
    const [updateItem, setUpdateItem] = useState<AdminDietList| undefined>();

    const dispatch = useAppDispatch();
    const { isLoading, dietList } = useAppSelector(selectAdminDiet);

    const getDietList = () => {
        if (!isLoading) {
            dispatch(fetchAdminDietList());
        }
    };

    const onModalToggle = (refresh?: boolean) => {
        setModalState(!isModalOpen);
        if(refresh) {
            setCreateItem(undefined);
            setUpdateItem(undefined);
        }
    }

    useEffect(getDietList, []);

    const onCreateSubmit = async (body: ICalorieFormInput) => {
      setSubmitting(true)
      DietService.createRootDiet(body, createItem?.user?.id!)
        .then(res => {
            setSubmitting(false);
            onModalToggle(true);
            getDietList();
        })
        .catch(error => {
            setSubmitting(false);
        })
    }

    const onDeleteItem = async(id: number) => {
       await DietService.deleteItem(id);
       getDietList();
    }

    const onUpdateItem = async(body: ICalorieFormInput) => {
        setSubmitting(true);
        await DietService.update(updateItem?.id!, body)
        setSubmitting(false);
        onModalToggle(true);
        getDietList();
    }

    const onSetUpdateItem = (item: AdminDietList) => {
        setUpdateItem(item);
        onModalToggle();
    }

    const onSetCreateItem = (item: AdminDietList) => {
        setCreateItem(item);
        onModalToggle();
    }

    return (
        <Container sx={{ py: 2 }} maxWidth={false}>
            <Box display={'flex'} sx={{mb: 5}}>
                <Title variant='h5'>All Diet List</Title>
            </Box>
            {isLoading ? 
              <Loader /> :
              <AdminDietTable 
               dietList={dietList}
               onCreate={onSetCreateItem}
               onUpdate={onSetUpdateItem}
               onDelete={onDeleteItem}
              />
            }
            <CreateDiet 
                isSubmitting={isSubmitting}
                isOpen={isModalOpen}
                onSubmit={onCreateSubmit}
                onClose={onModalToggle} 
                updateItem={updateItem}
                onUpdate={onUpdateItem}
            />
        </Container>
    );
};
