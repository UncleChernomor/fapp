import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarPrivate(props) {
    return (
        <>
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
        </>
    );
}

export default NavbarPrivate;