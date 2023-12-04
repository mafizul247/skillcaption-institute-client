import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/LoginRegister/Login/Login';
import Register from '../Pages/LoginRegister/Register/Register';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';
import Dashboard from '../Layouts/Dashboard';
import PrivateProvider from '../Providers/PrivateProvider/PrivateProvider';
import UserClasses from '../Dashboard/UserDashboard/UserClasses/UserClasses';
import ManageUsers from '../Dashboard/AdminDashboard/ManageUsers/ManageUsers';
import AddAClass from '../Dashboard/InstractorDashboard/AddAClass/AddAClass';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import InstractorProvider from '../Providers/InstractorProvider/InstractorProvider';
import AdminProvider from '../Providers/AdminProvider/AdminProvider';
import MyClasses from '../Dashboard/InstractorDashboard/AddAClass/MyClasses/MyClasses';
import ManageClasses from '../Dashboard/AdminDashboard/ManageClasses/ManageClasses';
import Feedback from '../Dashboard/AdminDashboard/ManageClasses/Feedback';
import Payment from '../Dashboard/UserDashboard/Payment/Payment';
import EnrollClasses from '../Dashboard/UserDashboard/EnrollClasses/EnrollClasses';
import PaymentHistory from '../Dashboard/UserDashboard/PaymentHistory/PaymentHistory';

const routers = createBrowserRouter([
    {
        path: '',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/instructor',
                element: <Instructors />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateProvider><Dashboard /></PrivateProvider>,
        children: [
            {
                path: 'dashboardHome',
                element: <DashboardHome />
            },
            {
                path: 'userClass',
                element: <UserClasses />
            },
            {
                path: 'payment/:id',
                element: <Payment />
            },
            {
                path: 'enrolledClasses',
                element: <EnrollClasses />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },
            {
                path: 'addClass',
                element: <InstractorProvider><AddAClass /></InstractorProvider>
            },
            {
                path: 'myClasss',
                element: <InstractorProvider><MyClasses /></InstractorProvider>
            },
            {
                path: 'manageClasses',
                element: <AdminProvider><ManageClasses /></AdminProvider>
            },
            {
                path: 'feedback/:id',
                element: <AdminProvider><Feedback /></AdminProvider>
            },
            {
                path: 'manageUsers',
                element: <AdminProvider><ManageUsers /></AdminProvider>
            }
        ]
    }
])

export default routers;