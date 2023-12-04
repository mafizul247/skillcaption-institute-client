import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, logOut, googleLogin, setReload } = useContext(AuthContext)
    const [color, setColor] = useState(true);
    const [registerMessage, setRegisterMessage] = useState('')
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        if (data.password !== data.confirmPassword) {

            Swal.fire(
                'No Match',
                'password should be same',
                'question'
            )

            return
        }

        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setRegisterMessage('Successfully Register')
                setColor(true);

                if (user && user.email) {
                    const userDetails = { name: data.name, email: data.email, image: data.URL, phone: data.phone, address: data.address, gender: data.gender, role: "student" }
                    fetch('https://skillcaption-institue-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }

                setRegisterMessage('Successfully Login')
                updateUser(result.user, data.name, data.URL)
                reset();
                logOut().then(() => {
                }).catch((error) => {
                });
                navigate('/login')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage)
                setColor(false);
            });

    }

    const updateUser = (currentUser, name, URL) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: URL
        }).then(() => {
            console.log(currentUser);
            setReload(true);
        }).catch((error) => {

        });
    }

    const googleHandler = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                if (user && user.email) {
                    const userDetails = { name: user.displayName, email: user.email, image: user.photoURL, role: "student" }
                    fetch('https://skillcaption-institue-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
                console.log('popUp', user);
                setReload(true);
                setRegisterMessage('Successfully Register');
                setColor(true);
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                setRegisterMessage(errorMessage);
                setColor(false);
            });
    }

    return (
        <div className='my-4'>
            <h1 className="text-4xl font-semibold text-center my-4">REGISTER</h1>
            <div className='w-full md:w-2/4 mx-auto border-2 p-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className='grid md:grid-cols-2 md:gap-4'>
                            <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your name" aria-label="Full name"
                                    {...register("name", { required: true })} />
                            </div>
                            <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Email" {...register("email", { required: true })} />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 md:gap-4'>
                            <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your phone" aria-label="Phone" {...register("phone", { required: true })} />
                            </div>
                            <div className="flex items-center border-b border-slate-700 mb-2">
                                <select className="select w-full mr-3 px-2 leading-tight focus:outline-none" {...register("gender", { required: true })}>
                                    <option disabled selected>Select your gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="url" placeholder="Enter your photoURL" aria-label="Full name" {...register("URL", { required: true })} />
                        </div>

                        <div className="flex items-center border-b border-slate-700 py-2 ">
                            <textarea className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" cols="5" rows="1" type="text" placeholder="Enter your address" aria-label="Address" {...register("address", { required: true })} ></textarea>
                        </div>

                        <div className="flex items-center border-b  border-slate-700 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type='password' placeholder="Enter your password" aria-label="Full name" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?/])(?=.*[A-Z]).+/ })} />
                        </div>

                        {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500 font-bold my-2'>Password should be at least 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500 font-bold my-2'>Password should contain one uppercase and a special character</p>}


                        <div className="flex items-center border-b  border-slate-700 py-3">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type='password' placeholder="Confirm password" aria-label="Full name" {...register("confirmPassword", { required: true })} />
                        </div>

                        <div className='my-6 flex justify-between flex-col md:flex-row items-center'>
                            <div>
                                <small>Already have an account ? <Link to='/login' className='text-blue-700 underline hover:text-blue-900'>Login</Link></small>
                            </div>
                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{registerMessage}</p>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>

                <div className='mt-4 flex flex-col md:flex-row gap-5 justify-around'>
                    <div className='inline-block'>
                        <div onClick={googleHandler} className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
                            <FcGoogle className='h-6 w-6'></FcGoogle>
                            <span>Google Sign-in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;