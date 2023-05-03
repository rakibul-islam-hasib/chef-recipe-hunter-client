import React, { useContext, useState } from 'react';
import google from '../../assets/search.png';
import github from '../../assets/github.png';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FadeLoader } from 'react-spinners'


const Register = () => {
    const [error, setError] = useState('');
    const { register , update , user } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const redirect = location?.state?.from || '/';
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const handelFormSubmit = e => {
        setLoading(true);
        e.preventDefault();
        setError('');
        let form = e.target;
        let name = form.name.value;
        let email = form.email.value;
        let photo = form.photo.value;
        let password = form.password.value;
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        register(email, password)
            .then(result => {
                // console.log(result.user);
                update(photo, name).then(()=>{})
                .catch(err=>console.log(err.code))
                navigate(redirect, { replace: true });
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setError(err.code);
                setLoading(false);
            })
    }
    if(user){
        return <Navigate to="/" replace state={{from : location.pathname}} />;
    }
    return (
        loading ? <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#36d7b7" />
        </div> :
            <div className='h-screen flex flex-col md:flex-row md:w-[70%] w-full  mx-auto justify-center items-center'>
                <div className="mb-6">
                    <h1 className='text-4xl tracking-wider  font-bold'>Create your account..! </h1>
                    <p className='text-xl my-3'><small>Welcome!! create your account to continue..</small></p>
                    <div className="">
                        <button
                            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img className="w-6 h-6" src={google} loading="lazy" alt="" />
                            <span className='font-semibold'>Continue with Google</span>
                        </button>
                        <button
                            className="px-4 py-2 mt-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img className="w-6 h-6" src={github} loading="lazy" alt="" />
                            <span className='font-semibold'>Continue with Github</span>
                        </button>
                    </div>
                </div>
                <div className="relative mx-auto md:ml-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div className="w-full">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
                            <p className="mt-2 text-red-500">{error}</p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handelFormSubmit}>
                                <div className="relative mt-6">
                                    <input type="text" name="name" placeholder="Full Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Full Name</label>
                                </div>
                                <div className="relative mt-6">
                                    <input required type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div className="relative mt-6">
                                    <input type="text" name="photo" placeholder="Photo URL" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label htmlFor="photo" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Photo URL</label>
                                </div>
                                <div className="relative mt-6">
                                    <input required type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>
                                <div className="my-6">
                                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                                </div>
                                <p className="text-center text-sm text-gray-500">Don't have an account yet?
                                    <Link to="/login" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Login</Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;