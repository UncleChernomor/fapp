import { Grid, TextField } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { UserContext } from '..';
import ButtonV from '../components/UI/button/ButtonV';
import './LoginStyle.css';

function Login(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth } = useContext(UserContext);

    const onHandleEnter = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential.user.displayName === null) {
                    const userT = userCredential.user.email.split('@');
                    userCredential.user.displayName = userT[0];
                }
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('code: ' + errorCode + '\nerrorMessage: ' + errorMessage);
            });
    }

    const onHandleCreate = async () => {
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (name.length < 1) {
                    const userT = userCredential.user.email.split('@');
                    userCredential.user.displayName = userT[0];
                } else {
                    userCredential.user.displayName = name;
                }
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('code: ' + errorCode + '\nerrorMessage: ' + errorMessage);
                // ..
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
                <ButtonV onClick={onHandleCreate}>Регистрация</ButtonV>
                <ButtonV onClick={onHandleEnter}>Войти</ButtonV>
            </Grid>
        </main >
    );
}

export default Login;