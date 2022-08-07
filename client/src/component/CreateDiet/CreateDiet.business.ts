import * as yup from 'yup';

export const dietSchema = yup.object({
    name: yup.string().required().matches(/^[A-Z a-z]+$/, { message: 'Only characters allowed.' }),
    calories: yup.number().required().positive('Calories should be greater than 0'),
    consumedAt: yup.date().required(),
    isCheatDiet: yup.boolean()
});