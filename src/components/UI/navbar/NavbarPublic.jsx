import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonV from '../button/ButtonV';

function NavbarPublic(props) {
    return (
        <Grid
            container
            justifyContent='space-between'
            alignItems='center'
        >
            <Grid item>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/"}>
                    <ButtonV style={{ color: 'inherit' }}>
                        Home
                    </ButtonV>
                </NavLink>

                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/useapi"}>
                    <ButtonV style={{ color: 'inherit' }}>
                        Use API
                    </ButtonV>
                </NavLink>
            </Grid>
            <Grid item>
                <NavLink style={{ margin: '10px', fontSize: '20px' }} to={"/login"}>
                    <ButtonV style={{ color: 'inherit' }}>
                        Login
                    </ButtonV>
                </NavLink>
            </Grid>

        </Grid >
    );
}

export default NavbarPublic;