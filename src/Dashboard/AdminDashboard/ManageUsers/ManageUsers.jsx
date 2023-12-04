import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useContext(AuthContext);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    // const [users, setUsers] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    const handleMakeInstructor = (id) => {
        // console.log(id);
        axiosSecure.patch(`/makeInstructor/${id}`, {
            updateRole: 'true', role: 'instructor'
        })
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Done!',
                        'Make Instructor Successfully.',
                        'success'
                    )
                }
            })
    }

    const HandleMakeAdmin = (id) => {
        // console.log(id);
        axiosSecure.patch(`/makeAdmin/${id}`, {
            updateRole: 'true', role: 'admin'
        })
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Done!',
                        'Make Admin Sussessfully.',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Manage User -Skillcaption Inistitue</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((singleUser, index) => {
                                return (
                                    <tr key={singleUser._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img className="w-10 h-10 rounded-full" src={singleUser.image} alt="user" />
                                        </td>
                                        <td>{singleUser.name}</td>
                                        <td>{singleUser.email}</td>
                                        <td className="font-bold">{singleUser.role}</td>
                                        <td>
                                            <button onClick={() => handleMakeInstructor(singleUser._id)} className="btn btn-xs" disabled={singleUser.updatedRole === "true"}>Instructor</button>
                                        </td>
                                        <td>
                                            <button onClick={() => HandleMakeAdmin(singleUser._id)} disabled={singleUser.updatedRole === "true"} className="btn btn-xs">Admin</button>
                                        </td>

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

export default ManageUsers;