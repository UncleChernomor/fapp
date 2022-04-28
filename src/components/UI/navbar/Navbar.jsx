import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavbarPrivate from './NavbarPrivate';
import NavbarPublic from './NavbarPublic';
import { UserContext } from '../../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.css';
import { signOut } from 'firebase/auth';

function Navbar(props) {
    const { auth } = useContext(UserContext);
    const [user] = useAuthState(auth);
    const logout = () => signOut(auth);

    return (
        <AppBar position='static'>
            <Toolbar variant='dense' component='nav'>
                {
                    user ? <NavbarPrivate logout={logout} /> : <NavbarPublic />
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;