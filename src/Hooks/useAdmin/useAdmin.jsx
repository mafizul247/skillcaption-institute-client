import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin = [], isLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [isAdmin, isLoading, refetch];
};

export default useAdmin;