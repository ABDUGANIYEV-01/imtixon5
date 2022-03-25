import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/auth/login', {
                replace: false,
                state: {
                    returnUrl:location
                }
            })
        }

        console.log(location)
    }, [location, navigate])
    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;
