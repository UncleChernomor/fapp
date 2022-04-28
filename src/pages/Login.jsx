import { async } from '@firebase/util';
import { Grid, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { UserContext } from '..';
import ButtonV from '../components/UI/button/ButtonV';
import './LoginStyle.css';

function Login(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { auth } = useContext(UserContext);

    const onHandleEnter = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <main>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction='column'
                sx={{ gap: 1 }}>
                <TextField label='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <TextField label='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid
                item
                justifyContent='center'
                alignItems='center'>
                <ButtonV>Регистрация</ButtonV>
                <ButtonV onClick={onHandleEnter}>Войти</ButtonV>
            </Grid>
        </main >
    );
}

export default Login;