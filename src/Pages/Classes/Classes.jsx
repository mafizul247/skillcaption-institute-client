import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses/useClasses';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Classes = () => {
    const [classes] = useClasses();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSelect = (singleClass) => {
        if (user) {
            // console.log(singleClass);
            const selectedClass = {
                classId: singleClass._id, nameClass: singleClass.nameClass, instructorName: singleClass.instructorName, classImg: singleClass.classImg, price: singleClass.price, seats: singleClass.seats, students: singleClass.students, email: user?.email, payment: false
            }
            fetch(`https://skillcaption-institue-server.vercel.app/selectedClass/${user?.email}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.isExist) {
                        return (
                            Swal.fire({
                                icon: 'error',
                                title: 'Sorry ',
                                text: 'Already, You added!',
                            })
                        )
                    } else if (data.acknowledged) {
                        return (
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your class has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        )
                    }
                })
        } else {
            Swal.fire({
                title: 'Are you sure select this class?',
                text: "You have to login!",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            })
        }
    }

    return (
        <div className='mx-8'>
            <Helmet>
                <title>Classes -Skillcaption Inistitue</title>
            </Helmet>
            <h2 className='my-4 text-center text-2xl font-bold text-gray-600'>Skillcaption Inistitue's Total Classess {classes ? classes.length : 0}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {classes?.map((singleClass, index) => {
                    return (
                        <div key={index} className={`space-y-2 border-[1px] p-8 cursor-pointer rounded-lg  ${singleClass.seats === 0 ? 'bg-red-200' : 'bg-gray-100'}`}>
                            <Slide>
                                <img className="rounded-md md:h-[250px] w-full" src={singleClass.classImg} alt="" />
                                <p className="font-semibold text-xl">Course Name : {singleClass.nameClass}</p>
                                <p className="font-semibold">Instructor Name : {singleClass.instructorName}</p>
                                <p className="font-semibold">Available Seats : {singleClass.seats}</p>
                                <p className="font-semibold">Price : ${singleClass.price}</p>

                                <button onClick={() => handleSelect(singleClass)} className={`btn px-5 py-2 text-white w-full ${singleClass.seats === 0 ? 'bg-red-600' : 'bg-[#4036f7] hover:bg-[#0a00c9]'}`} disabled={singleClass.seats === 0 ||
                                    (user ? '' : false)}>Select</button>
                            </Slide>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Classes;