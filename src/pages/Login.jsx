import { Grid, TextField } from '@mui/material';
import React from 'react';
import ButtonV from '../components/UI/button/ButtonV';

function Login(props) {
    return (
        <>
            <Grid
                container
                justifyContent='center'>
                <TextField />
                <TextField />
                <ButtonV>Войти</ButtonV>
            </Grid>
        </>
    );
}

export default Login;