import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Adminlayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Adminlayout;
