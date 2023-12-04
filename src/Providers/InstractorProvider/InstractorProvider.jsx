import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useInstractor from '../../Hooks/useInstractor/useInstractor';
import { Navigate, useLocation } from 'react-router-dom';

const InstractorProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isLoading] = useInstractor();
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isInstructor) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace />
};

export default InstractorProvider;