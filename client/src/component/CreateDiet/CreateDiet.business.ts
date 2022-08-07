import * as yup from 'yup';

export const dietSchema = yup.object({
    name: yup.string().required('Food name is required'),
    calories: yup.number().required('Calorie is required'),
    consumedAt: yup.date().required(),
    isCheatDiet: yup.boolean()
});