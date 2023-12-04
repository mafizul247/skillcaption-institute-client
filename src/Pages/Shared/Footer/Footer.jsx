import React from 'react';
import logo from './../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const curentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-200">
            <div className="footer p-10  text-base-content md:flex md:justify-between justify-center mx-auto md:container ">
                <div>
                    <img className="h-20 w-20" src={logo} alt="" />
                    <p>Skillcation Institute<br />Providing reliable training since 1990</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <Link to='/classes' className="link link-hover">Classess</Link>
                    <Link to='/instructor' className="link link-hover">Instructor</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-slate-200 text-base-content">
                <div>
                    <p>Copyright © {curentYear} - All right reserved by Skillcation Institute.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;