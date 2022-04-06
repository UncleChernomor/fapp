import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Layout(props) {
    const classes = [];
    return (
        <>
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
                </nav>
            </AppBar>
            <Outlet />
        </>
    );
}

export default Layout;