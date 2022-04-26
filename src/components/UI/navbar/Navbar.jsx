import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavbarPrivate from './NavbarPrivate';
import NavbarPublic from './NavbarPublic';

function Navbar(props) {
    const user = true;
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