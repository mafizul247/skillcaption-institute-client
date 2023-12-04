import React from 'react';
import useEnrollClasses from '../../../Hooks/useEnrollClasses/useEnrollClasses';

const EnrollClasses = () => {
    const [enrollClasses , refetch] = useEnrollClasses();

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Image</th>
                            <th>language</th>
                            <th>Instructor Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClasses?.map((enrollClass, index) => {
                                return (
                                    <tr key={enrollClass._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={enrollClass.classImg} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{enrollClass.nameClass}</td>
                                        <td>{enrollClass.instructorName}</td>
                                        <td className="font-bold">{enrollClass.payment ? 'DONE' : 'PENDING'}</td>
                                        <td className="font-bold">Enrolled</td>
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

export default EnrollClasses;