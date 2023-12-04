import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import useUserClasses from '../../../Hooks/useUserClasses/useUserClasses';
import { Helmet } from 'react-helmet';

const UserClasses = () => {
    // const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [data, refetch] = useUserClasses();

    // console.log(data);
    // const [selectedClasses, setSelectedClases] = useState();
    // const [reload, setReload] = useState(null);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/selectedClass/${user?.email}`, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('access-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setSelectedClases(data))
    // }, [reload]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(id);
                // fetch(`http://localhost:5000/deleteClass/${id}`, {
                //     method: 'DELETE'
                // })
                axiosSecure.delete(`/deleteClass/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your class has been deleted',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                    .catch(error => console.log(error.message))
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Selected Classes -Skillcaption Inistitue</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((selectClass, index) => {
                                return (
                                    <tr key={selectClass._id}>
                                        <td>{index + 1}</td>
                                        <td>{selectClass.nameClass}</td>
                                        <td>{selectClass.instructorName}</td>
                                        <td>{selectClass.seats}</td>
                                        <td>
                                            <Link to={`/dashboard/payment/${selectClass._id}`}>
                                                <button className="bg-[#4941eb] hover:bg-[#2c22e6] btn-sm text-white rounded-md">PAY</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(selectClass._id)} className="btn btn-circle btn-outline bg-[#e71c6a] hover:bg-[#c70a7b] btn-sm text-white rounded-md">
                                                <FaTrash />
                                            </button>
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

export default UserClasses;