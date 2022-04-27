import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavbarPrivate from './NavbarPrivate';
import NavbarPublic from './NavbarPublic';
import { UserContext } from '../../..';
import './Navbar.css';

function Navbar(props) {
    const { user } = useContext(UserContext);

    return (
        <AppBar position='static'>
            <Toolbar variant='dense' component='nav'>
                {
                    user ? <NavbarPrivate /> : <NavbarPublic />
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;