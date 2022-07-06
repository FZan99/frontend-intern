import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useStore from "./store/AuthStore";


const ProtectedRoute = () => {
    const {isAuthenticated} = useStore();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/adminLogin" state={{ from: location }} />;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
   
}

export default ProtectedRoute;