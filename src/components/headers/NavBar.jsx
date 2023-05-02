import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
const navbarData = [
    { label: "Home", url: "/" },
    { label: "Recipes", url: "/recipes" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
];

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    const pathName = location.pathname;
    const { user } = useContext(AuthContext);
    // console.log(user.photoURL)
    useEffect(() => {
        if (location.pathname === '/login') {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [pathName])
    return (
        <div className='w-[90%] flex justify-between text-white items-center py-4 mx-auto'>
            <div className="">
                <h1 className='text-4xl font-bold' >Amber Chefs</h1>
            </div>
            <div className="hidden md:block">
                <ul className='flex items-center justify-between gap-4'>
                    {navbarData.map((item, index) => <li key={index} className='font-bold'><NavLink to={item.url}>{item.label}</NavLink></li>)}
                    <li className=''>
                        {
                            user ?
                                <div className="">
                                    <img data-tooltip-variant="success" data-tooltip-id="my-tooltip" data-tooltip-content={`${user.displayName}`} className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                </div>
                                :
                                isLogin ? <button onClick={() => navigate('/register')} className='bg-primary px-5 py-2 rounded-full '>Register</button> :
                                    <button onClick={() => navigate('/login')} className='bg-primary px-5 py-2 rounded-full '>Login</button>
                        }
                    </li>
                </ul>
            </div>
            <Tooltip float={true} place='bottom' id="my-tooltip" />
        </div >
    );
};

export default NavBar;