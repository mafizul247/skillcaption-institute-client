import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin();
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />;
};

export default AdminProvider;