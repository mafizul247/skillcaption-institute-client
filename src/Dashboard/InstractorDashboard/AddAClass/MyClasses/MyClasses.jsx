import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

const MyClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ['instractorClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myClasses/${user?.email}`)
            return res.data;
        }
    })
    // console.log(myClasses);

    return (
        <div>
            <Helmet>
                <title>My Classes -Skillcaption Inistitue</title>
            </Helmet>
            <h1 className='text-2xl font-bold my-8 text-gray-600 text-center'>My All Classes</h1>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses?.map((myClass, index) => {
                                return (
                                    <tr key={myClass._id}>
                                        <td>{index + 1}</td>
                                        <td>{myClass.nameClass}</td>
                                        <td>{myClass.seats}</td>
                                        <td>{myClass.students}</td>
                                        <td className={`${myClass.status === 'pending' && 'text-blue-600 font-bold'} ${myClass.status === 'approved' && 'font-bold text-green-600'} ${myClass.status === 'denied' && 'font-bold text-red-600'}`}>{myClass.status}</td>
                                        <td >{myClass.feedback ? myClass.feedback : ''}</td>
                                        <td><button className="btn btn-sm" disabled={myClass.status === 'approved'}>Update</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;