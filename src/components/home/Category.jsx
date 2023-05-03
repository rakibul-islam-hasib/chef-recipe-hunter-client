import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt'


const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 180,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.04,.98,.52,.99)",    // Easing on enter/exit.
}
const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch('https://amber-chef-codewithhasib.vercel.app/api/category')
            .then(res => res.json())
            .then(data => setCategoryData(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-5xl font-bold  text-center mt-11'>Our <span className='text-primary'>Category</span></h1>
            <p className='text-xl text-center mb-11 mt-3'><small>Find out what you want</small></p>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-3xl font-semibold'>Categories</h1>
                <button className='bg-primary px-5 py-2 rounded-full font-bold'>View All Categories</button>
            </div>
            <div className="grid mb-10 gap-6 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-6">
                {
                    categoryData.map((data, index) => (
                        <Tilt options={defaultOptions}
                            style={{ background: `${data.color}` }}
                            className='flex hover:-translate-y-1 flex-col justify-center items-center rounded-lg py-5 hover:shadow-xl transition duration-150 ease-in-out hover:text-primary cursor-pointer'
                            key={index}
                        >
                            <img className='w-[50%]' src={data.image} alt='' />
                            <h1 className='text-xl font-semibold mt-3'>{data.title}</h1>
                        </Tilt>
                    ))
                }

            </div>
        </div>
    );
};

export default Category;