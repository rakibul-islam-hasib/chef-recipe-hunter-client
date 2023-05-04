import React from 'react';
import Hero from '../headers/Hero';
import ChefAbout from './ChefAbout';
import Category from './Category';
import Chef from './cooking/Chef';
import bgImg from '../../assets/img2.jpg'
import Features from './Features';
const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImg})` }} className="h-screen  bg-fixed bg-cover">
                <div className="h-screen bg-black bg-opacity-75">
                    <Hero />
                </div>
            </div>
            <div className="my-14">
                <ChefAbout />
            </div>
            <div className="">
                <Features />
            </div>
            <div className="">
                <Chef />
            </div>
            <div className="">
                <Category />
            </div>

            <div className="">
            </div>
        </>
    );
};

export default Home;