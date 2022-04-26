import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarPublic(props) {
    return (
        <>
            <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/"}>
                Home
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

export default NavbarPublic;