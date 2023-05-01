import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navbarData = [
    { label: "Home", url: "/" },
    { label: "Recipes", url: "/recipes" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
];

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[90%] flex justify-between text-white items-center py-4 mx-auto'>
            <div className="">
                <h1 className='text-4xl font-bold' >Amber Chefs</h1>
            </div>
            <div className="hidden md:block">
                <ul className='flex items-center justify-between gap-4'>
                    {navbarData.map((item, index) => <li key={index} className='font-bold'><NavLink to={item.url}>{item.label}</NavLink></li>)}
                    <li className=''><button onClick={()=>navigate('/login')} className='bg-secondary px-5 py-2 rounded-full '>Login</button></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;