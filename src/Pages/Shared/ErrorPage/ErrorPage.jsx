import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import errorImg from '../../../assets/Images/404-error.jpg'
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <>
        <Helmet>
            <title>Error Page - Skillcaption Institue</title>
        </Helmet>
            <div className='my-8'>
                <img className='lg:w-[60vw] lg:h-[60vh] mx-auto' src={errorImg} alt="error-image" />
                <div className='text-center my-4'>
                    <h1 className='text-2xl font-bold text-red-600'>Oops! {error.status} Error</h1>
                    <p className='text-xl font-bold text-red-600'>{error?.error.message}
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <div className='flex justify-center '>
                    <Link to='/'>
                        <button className='btn btn-primary'><FaArrowLeft />Go HOME</button>
                    </Link>
                    <button className='btn btn-warning ml-4' onClick={() => navigate(-1)}><FaArrowLeft /> Go Back</button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;