import React from 'react';
import errorImg from '../../../assets/404error.gif'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../headers/NavBar';
const ErrorPage = () => {
    document.title = 'Error Page Not Found - Amber Chefs';
    const navigate = useNavigate(); 
    return (
        <div className='relative'>
            <div className="bg-black fixed top-0  w-full">
                <NavBar />
            </div>
            <div style={{backgroundImage : `url(${errorImg})`}} className="h-[70vh] bg-center bg-contain bg-no-repeat flex justify-center items-center">
               
            </div>
            <div className="flex flex-col mb-14 justify-center items-center">
                <h1 className='text-3xl font-bold font-sans text-center my-7'>The page you are looking for that is not define </h1>
                <button onClick={()=>navigate('/')} className='px-7 py-2 bg-cyan-500 font-bold text-lg rounded-full'>Go to Home</button>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default ErrorPage;