import React, { useEffect, useState } from 'react';

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
                        <div
                            style={{ background: `${data.color}` }}
                            className='flex flex-col justify-center items-center rounded-lg py-5 hover:shadow-xl transition duration-500 ease-in-out hover:text-primary cursor-pointer'
                            key={index}
                        >
                            <img className='w-[50%]' src={data.image} alt='' />
                            <h1 className='text-xl font-semibold mt-3'>{data.title}</h1>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Category;