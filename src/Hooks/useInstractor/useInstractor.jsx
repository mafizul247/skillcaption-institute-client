import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstractor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor = [], isLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/${user.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isLoading, refetch];
};

export default useInstractor;