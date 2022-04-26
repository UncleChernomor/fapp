import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import NoFoundPage from "../pages/NoFoundPage.jsx";
import WorkWithApi from "../pages/WorkWithApi.jsx";

function PublicRoutes(props) {
    return (
        <Routes>
            <Route path="/useapi" element={<WorkWithApi />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoFoundPage />} />
        </Routes>
    );
}

export default PublicRoutes;