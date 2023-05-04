import React from 'react';
import blogImg from '../../assets/blog.jpg'
const Blog = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${blogImg})` }} className="h-[60vh] bg-cover flex justify-center items-center">
                <div className="h-[60vh] flex justify-center items-center bg-black bg-opacity-75 w-full">
                    <h1 className='text-5xl font-bold text-white font-sans uppercase'>blog</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;