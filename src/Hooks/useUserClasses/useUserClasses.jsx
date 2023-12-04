import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

function useUserClasses() {
    const [axiosSecure] = useAxiosSecure()
    const {user , loading} = useContext(AuthContext)

    const { data = [] , refetch } = useQuery({
        queryKey: ['userClass'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClass/${user?.email}`)
            return res.data;
        }
    })
    return [data , refetch]
}

export default useUserClasses;