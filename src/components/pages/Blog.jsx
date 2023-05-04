import React from 'react';
import blogImg from '../../assets/blog.jpg'
import { FcTimeline } from 'react-icons/fc';
import TimeLine from './shared/TimeLine';
import Accordion from './shared/Accordion';
const Blog = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${blogImg})` }} className="h-[60vh] bg-cover flex justify-center items-center">
                <div className="h-[60vh] flex justify-center items-center bg-black bg-opacity-75 w-full">
                    <h1 className='text-5xl font-bold text-white font-sans uppercase inline-flex items-center'>blog <FcTimeline/></h1>
                </div>
            </div>
            {/* All Blog Post Here  */}
            <TimeLine />
            {/* <Accordion /> */}
        </div>
    );
};

export default Blog;