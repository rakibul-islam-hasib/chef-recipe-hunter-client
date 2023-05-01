import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarData = [
    { label: "Home", url: "/" },
    { label: "Recipes", url: "/recipes" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
];

const NavBar = () => {
    return (
        <div className='w-[90%] flex justify-between text-white items-center py-4 mx-auto'>
            <div className="">
                <h1 className='text-4xl font-bold' >Amber Chefs</h1>
            </div>
            <div className="">
                <ul className='flex justify-between gap-4'>
                    {navbarData.map((item, index) => <li key={index} className='font-bold'><NavLink to={item.url}>{item.label}</NavLink></li>)}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;