import React from 'react';
import { FcBiohazard } from 'react-icons/fc';

const ChefAbout = () => {
    return (
        <div className='w-'>
            <div className="w-[90%] mx-auto text-center">
                <span className='inline-flex justify-center'>
                    <FcBiohazard className='text-7xl text-primary' />
                </span>
                <h1 className='text-5xl duration-200 hover:text-purple-500 text-primary text-center font-bold'><span className='text-black hover:text-purple-500'>Recipes Using</span> Amber Nectar</h1>
                <p className='my-4 '> "Recipes Using Amber Nectar" is a cookbook title that focuses on using honey in a variety of dishes. Honey, also known as "amber nectar," is a versatile ingredient that can add sweetness, flavor, and texture to both sweet and savory dishes.</p>
            </div>
        </div>
    );
};

export default ChefAbout;