import React from 'react';
const Hero = () => {
    return (
        <div className='w-[90%] h-[100vh]  flex justify-center items-center  mx-auto'>

            <div className="text-white text-center w-full md:w-[70%]">
                <h1 className='text-7xl font-bold  mb-3'>Amber Chefs</h1>
                <p className='text-base my-6'>Amber Chefs is an online platform connecting food enthusiasts with talented chefs worldwide. Explore new flavors and cuisines, improve your cooking skills with recipes, tutorials, and expert advice.</p>
                <button className='bg-primary px-11 py-3 rounded-full'>Get Started</button>
            </div>

        </div>
    );
};

export default Hero;