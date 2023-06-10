import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, FormControlLabel, Modal, TextField } from "@mui/material"
import { useEffect } from "react";
import { CreateDietBox } from "./CreateDiet.styled";
import { dietSchema } from "./CreateDiet.business";

interface Props {
    onClose: () => void;
    isOpen: boolean;
    onSubmit: (result: ICalorieFormInput) => void;
    onUpdate?:  (result: ICalorieFormInput) => void;
    isSubmitting: boolean;
    updateItem?: AdminDietList;
}

export const CreateDiet = (props: Props) => {
    const { isOpen, onClose, onSubmit, isSubmitting, updateItem, onUpdate } = props; 
    // form
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ICalorieFormInput>({
        resolver: yupResolver(dietSchema),
    });

    useEffect(reset, [isOpen])
    return (
    <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="Create-modal"
        aria-describedby="Create-modal-description"
      >
        <CreateDietBox
            component='form'
            onSubmit={handleSubmit(updateItem ? onUpdate! : onSubmit)}>
            <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                defaultValue={updateItem?.name}
                render={({ field }) => (
                    <TextField
                        id='name'
                        label='Food name'
                        size='small'
                        autoFocus
                        margin='normal'
                        required
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        {...field}
                    />
                )}
            />
            <Controller
                name='calories'
                control={control}
                rules={{ required: true }}
                defaultValue={updateItem ? +updateItem.calories : undefined}
                render={({ field }) => (
                    <TextField
                        id='calories'
                        label='Calorie Value'
                        type='number'
                        size='small'
                        margin='normal'
                        required
                        fullWidth
                        error={!!errors.calories}
                        helperText={errors.calories?.message}
                        {...field}
                    />
                )}
            />
           <Controller
                name='consumedAt'
                control={control}
                rules={{ required: true }}
                defaultValue={updateItem ? new Date(updateItem.consumedAt) : undefined}
                render={({ field }) => (
                    <TextField
                        id="consumedAt"
                        label="Comsumed At"
                        type="datetime-local"
                        margin='normal'
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{ width: 250 }}
                        {...field}
                        
                  />
                )}
            />
            <Controller
                name='isCheatDiet'
                control={control}
                rules={{ required: true }}
                defaultValue={updateItem?.isCheatDiet}
                render={({ field }) => (
                    <FormControlLabel id='isCheatDiet' control={<Checkbox checked={updateItem?.isCheatDiet} />} label="Is Cheat Diet?" {...field} />
                )}
            />
            <Button
                disabled={isSubmitting}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 2, mb: 2 }}>
                {updateItem ? 'Update' : 'Create'}
            </Button>
        </CreateDietBox>
      </Modal>)
}
