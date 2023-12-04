import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);

    const { data: newClasses = [], isLoading, refetch } = useQuery({
        queryKey: ['instructorNewClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/instructorNewClass/true')
            return res.data;
        }
    })

    const handleApprovedClass = (id) => {
        // console.log(id);
        axiosSecure.patch(`/approvedClass/${id}`, { status: 'approved' })
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You Approved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = (id) => {
        // console.log(id);
        axiosSecure.patch(`/denyClass/${id}`, { status: 'denied' })
        .then(data => {
            // console.log(data.data);
            if(data.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You Deny Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Manage Classes -Skillcaption Inistitue</title>
            </Helmet>
            <h2 className='text-2xl text-gray-600 text-center font-bold mb-4'>Manage Classes</h2>

            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>Give Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newClasses?.map((newClass, index) => {
                                return (
                                    <tr key={newClass._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={newClass.classImg} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{newClass.nameClass}</td>
                                        <td>{newClass.instructorName}</td>
                                        <td>{newClass.email}</td>
                                        <td>{newClass.seats}</td>
                                        <td>${newClass.price}</td>
                                        <td className={`${newClass.status === 'pending' && 'text-blue-600 font-bold'} ${newClass.status === 'approved' && 'text-green-600 font-bold'} ${newClass.status === 'denied' && 'text-red-600 font-bold'}`}>{newClass.status}</td>
                                        <td>
                                            <div className='flex flex-col gap-2'>
                                                <button onClick={() => handleApprovedClass(newClass._id)} className='btn bg-green-600 text-white hover:text-black btn-xs' disabled={newClass.status === "approved" || newClass.status === "denied"}>Approve</button>
                                                <button onClick={() => handleDeny(newClass._id)} className='btn bg-red-600 text-white hover:text-black btn-xs' disabled={newClass.status === "approved" || newClass.status === "denied"}>Deny</button>

                                            </div>
                                        </td>
                                        <td className='text-center'><Link to={`/dashboard/feedback/${newClass._id}`}> <button className='btn bg-primary text-white hover:text-black btn-xs'>Feedback</button></Link></td>
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

export default ManageClasses;