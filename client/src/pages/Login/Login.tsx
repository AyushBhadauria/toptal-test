import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from './Login.business'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Alert
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { login, selectAuth } from 'src/store/auth/authSlice';
import { LoginBox } from './Login.styled';

export const Login = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormInput>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<ILoginFormInput> = ({ email, password }) => {
        dispatch(login({ email, password }));
    };

    return (
        <Container component='main' maxWidth='xs'>
            <LoginBox>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                {auth.error ? <Alert severity="error"><>{auth.error}</></Alert>: null}
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1, width: '100%' }}>
                    <Controller
                        name='email'
                        control={control}
                        rules={{ required: true }}
                        defaultValue={''}
                        render={({ field }) => (
                            <TextField
                                id='email'
                                label='Email Address'
                                size='small'
                                autoFocus
                                required
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name='password'
                        control={control}
                        rules={{ required: true }}
                        defaultValue={''}
                        render={({ field }) => (
                            <TextField
                                id='password'
                                label='Password'
                                type='password'
                                size='small'
                                margin='normal'
                                required
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                {...field}
                            />
                        )}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 2, mb: 2 }}>
                        Sign In
                    </Button>
                </Box>
            </LoginBox>
        </Container>
    );
};
