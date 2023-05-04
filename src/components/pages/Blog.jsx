import React, { createRef } from 'react';
import blogImg from '../../assets/blog.jpg'
import Pdf from "react-to-pdf";
import { FcTimeline } from 'react-icons/fc';
import TimeLine from './shared/TimeLine';

const Blog = () => {
    const ref = createRef();

    return (
        <div ref={ref} className=''>
            <div style={{ backgroundImage: `url(${blogImg})` }} className="h-[60vh] bg-cover flex justify-center items-center">
                <div className="h-[60vh] flex justify-center items-center bg-black bg-opacity-75 w-full">
                    <h1 className='text-5xl font-bold text-white font-sans uppercase inline-flex items-center'>blog <FcTimeline /></h1>
                </div>
            </div>
            <div className="">
                <h1 className='text-5xl font-bold text-center uppercase underline mt-8'>Question</h1>
                <p className='text-sm font-bold my-4 text-center'>Here is blog include with assignment-10 question and answer</p>
            </div>
            <div className="flex justify-center items-center mt-8">
                {/* Download PDF */}
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='px-9 py-4 bg-primary font-bold text-white rounded-full'>Download PDF</button>}
                </Pdf>
            </div>
            {/* All Blog Post Here  */}
            <div  className="">
                <TimeLine />
            </div>

        </div>
    );
};

export default Blog;