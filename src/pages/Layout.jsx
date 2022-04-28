import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UI/navbar/Navbar';

function Layout(props) {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;