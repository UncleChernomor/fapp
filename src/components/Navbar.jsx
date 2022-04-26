import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';

function Navbar(props) {
    return (
        <AppBar position='static'>
            <nav style={{ textAlign: 'center' }}>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/"}>
                    Home
                </NavLink>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/profile"}>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        Profile
                    </Typography>
                </NavLink>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/chats"}>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        Chats
                    </Typography>
                </NavLink>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/useapi"}>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        Use API
                    </Typography>
                </NavLink>
            </nav>
        </AppBar>
    );
}

export default Navbar;