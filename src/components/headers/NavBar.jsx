import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
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
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    // console.log(user.photoURL)
    const logOutHandler = () => {
        Swal.fire({
            title: 'Are you sure to logged out?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout..!'
        }).then((result) => {
            if (result.isConfirmed) {
                /*  */
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Logged out!',
                            'You are successfully logged out.',
                            'success'
                        )
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            }
        })


    }
    useEffect(() => {
        if (location.pathname === '/login') {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [pathName])
    // console.log(user.photoURL)
    return (
        <div className='w-[90%] relative flex justify-between text-white items-center py-4 mx-auto'>
            <div className="">
                <h1 className='text-4xl text-primary md:text-white font-bold' ><Link to='/'>Amber Chefs</Link></h1>
            </div>
            <div className="hidden md:block">
                <ul className='flex items-center justify-between gap-4'>
                    {navbarData.map((item, index) => <li key={index} className='font-bold hover:text-red-500 duration-300'>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to={item.url}>{item.label}</NavLink>
                    </li>)}
                    <li className=''>
                        {/* If user = true then showing  the photo on navbar  */}
                        {user ?
                            <div className="flex items-center gap-6">
                                {user?.photoURL ? (
                                    <img
                                        data-tooltip-variant="success"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                        className="w-10 h-10 rounded-full"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        data-tooltip-variant="success"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                        className="w-10 h-10 rounded-full"
                                        src='https://i.ibb.co/jZ05LNc/man.png'
                                        alt=""
                                    />
                                )}
                                <img
                                    onClick={logOutHandler}
                                    data-tooltip-variant="error"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Logout"
                                    className="w-[30px] h-[30px]"
                                    src="https://i.ibb.co/NYmMySM/switch.png"
                                    alt="Logout"
                                />
                            </div>
                            : isLogin ?
                                <button
                                    onClick={() => navigate("/register")}
                                    className="bg-primary px-5 py-2 rounded-full"
                                >
                                    Register
                                </button>
                                :
                                <button
                                    onClick={() => navigate("/login")}
                                    className="bg-primary px-5 py-2 rounded-full"
                                >
                                    Login
                                </button>
                        }
                    </li>
                </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden block">
                {
                    isOpen ? <MdClose className='text-3xl text-cyan-600' /> : <GiHamburgerMenu className='text-3xl text-cyan-600' />
                }
            </div>
            <div className={`${isOpen ? 'block top-[72px]' :'hidden'} duration-1000 -top-[100px] absolute`}>
                <ul className={`md:hidden mx-auto w-screen h-screen bg-black  flex flex-col items-center justify-center gap-4`}>
                    {navbarData.map((item, index) => <li key={index} className='font-bold hover:text-red-500 duration-300'>
                        <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to={item.url}>{item.label}</NavLink>
                    </li>)}
                    <li className=''>
                        {user ?
                            <div className="flex items-center gap-6">
                                {user?.photoURL ? (
                                    <img
                                        data-tooltip-variant="success"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                        className="w-10 h-10 rounded-full"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        data-tooltip-variant="success"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                        className="w-10 h-10 rounded-full"
                                        src='https://i.ibb.co/jZ05LNc/man.png'
                                        alt=""
                                    />
                                )}
                                <img
                                    onClick={logOutHandler}
                                    data-tooltip-variant="error"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Logout"
                                    className="w-[30px] h-[30px]"
                                    src="https://i.ibb.co/NYmMySM/switch.png"
                                    alt="Logout"
                                />
                            </div>
                            : isLogin ?
                                <button
                                    onClick={() => navigate("/register")}
                                    className="bg-primary px-5 py-2 rounded-full"
                                >
                                    Register
                                </button>
                                :
                                <button
                                    onClick={() => navigate("/login")}
                                    className="bg-primary px-5 py-2 rounded-full"
                                >
                                    Login
                                </button>
                        }
                    </li>
                </ul>
            </div>
            <Tooltip float={true} place='bottom' id="my-tooltip" />
        </div >
    );
};

export default NavBar;