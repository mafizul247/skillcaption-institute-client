import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import image from './../../assets/images/dashboard-home.jpg'
import { Helmet } from 'react-helmet';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Dashboard -Skillcaption Inistitue</title>
            </Helmet>
            <h2 className="text-5xl text-center"> Welcome Back {user?.displayName} !!!</h2>
            <img src={image} className="h-[500px] mx-auto mt-5" alt="" />
        </div>
    );
};

export default DashboardHome;