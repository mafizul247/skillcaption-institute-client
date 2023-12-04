import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/logo/logo.png'
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const NavBer = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL);

    const handleLogOut = () => {
        logOut().then(() => {
            // localStorage.removeItem('access-token');
        }).catch((error) => {
            console.log(error)
        });
    }

    const navItem = (
        <>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/classes"
            >
                Classes
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/instructor"
            >
                Instructor
            </NavLink>
            {
                user && <NavLink
                    to="/dashboard/dashboardHome"
                    className={({ isActive }) =>
                        isActive ? "active" : "default"
                    }
                >
                    Dashboard
                </NavLink>
            }
        </>
    );

    return (
        <div className="navbar bg-gray-700 text-white fixed z-40 bg-opacity-40 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItem}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-8 md:w-16">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className="text-xl md:text-xl font-semibold">
                            Skillcation Institute
                        </h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold space-x-7">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end md:mr-10">
                {user ? (
                    <>
                        <div className="flex justify-between items-center">
                            <div className="h-10 w-10 mr-3">
                                <img title={user.displayName}
                                    className="h-full w-full rounded-full"
                                    src={`${user?.photoURL}`}
                                    alt=""
                                />
                            </div>
                            <button className="" onClick={handleLogOut}>
                                SIGN OUT
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn-primary">Login</button>
                        </Link>
                    </>
                )}
            </div>

        </div>
    );
};

export default NavBer;