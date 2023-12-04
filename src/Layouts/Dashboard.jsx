import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BiHomeAlt2 } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { LuSchool, LuSchool2 } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import { MdPostAdd, MdPayment } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import useAdmin from '../Hooks/useAdmin/useAdmin';
import useInstractor from '../Hooks/useInstractor/useInstractor';
import { Helmet } from 'react-helmet';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstractor();

    return (
        <div>
            <Helmet>
                <title>Dashboard -Skillcaption Institue</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-7 ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary mb-4 text-white drawer-button lg:hidden"><FaArrowCircleLeft /> Open Sidemenu</label>
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-8 px-5 w-80 h-full bg-orange-400 gap-4 font-semibold text-white">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink
                                to="/dashboard/dashboardHome"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <BiHomeAlt2 className="w-5 h-5 text-white"></BiHomeAlt2> Dashboard Home
                            </NavLink>
                        </li>
                        {isAdmin && (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageClasses"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <MdManageAccounts className="w-5 h-5 text-white"></MdManageAccounts> Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manageUsers"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <HiOutlineUserGroup className="w-5 h-5 text-white"></HiOutlineUserGroup>  Manage Users
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {isInstructor && (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <MdPostAdd className="w-5 h-5 text-white"></MdPostAdd> Add Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myClasss"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <LuSchool2 className="w-5 h-5 text-white"></LuSchool2>  My Classes
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {!isAdmin && !isInstructor && (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/userClass"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <BiSelectMultiple className="w-5 h-5 text-white"></BiSelectMultiple>  My Selected Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/enrolledClasses"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <MdPayment className="w-5 h-5 text-white"></MdPayment> My Enrolled Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/paymentHistory"
                                        className={({ isActive }) => (isActive ? "active" : "")}
                                    >
                                        <SiAmazonpay className="w-5 h-5 text-white"></SiAmazonpay> My Payment History
                                    </NavLink>
                                </li>
                            </>
                        )

                        }

                        <hr />

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <BiHomeAlt2 className="w-5 h-5 text-white"></BiHomeAlt2> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/instructor"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <TbUsers className="w-5 h-5 text-white"></TbUsers> Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/classes"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <LuSchool className="w-5 h-5 text-white"></LuSchool> Classes
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;