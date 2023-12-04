import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {
    const { data: instructors = [], isLoading} = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://skillcaption-institue-server.vercel.app/instructors');
            return res.json();

        }
    })
    return [instructors, isLoading];
};

export default useInstructors;