import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonV from '../components/UI/button/ButtonV';
import './LoginStyle.css';

function Login(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <main>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction='column'
                sx={{ gap: 1 }}>
                <TextField label='name' type='text' />
                <TextField label='email' type='email' />
                <TextField label='password' type='password' />
            </Grid>
            <Grid
                item
                justifyContent='center'
                alignItems='center'>
                <ButtonV>Регистрация</ButtonV>
                <ButtonV>Войти</ButtonV>
            </Grid>
        </main >
    );
}

export default Login;