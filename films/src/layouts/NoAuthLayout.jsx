import React from 'react';
import { Outlet } from 'react-router-dom';

const NoAuthLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default NoAuthLayout;
