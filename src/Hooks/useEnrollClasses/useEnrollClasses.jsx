import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useEnrollClasses = () => {
    const [axiosSecure, loading] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: enrollClasses = [], refetch } = useQuery({
        queryKey: ['userClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClass/${user?.email}`)
            return res.data
        },
    })

    return [enrollClasses, refetch];
};

export default useEnrollClasses;