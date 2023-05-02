import React from 'react';
import Hero from '../headers/Hero';
import TimeLine from './TimeLine';
import ChefAbout from './ChefAbout';
import Category from './Category';

const Home = () => {
    return (
        <>
            <div className="h-screen bg-hero-pattern bg-fixed bg-cover">
               <div className="h-screen bg-black bg-opacity-75">
                    <Hero />
               </div>
            </div>
            <div className="my-14">
                {/* <TimeLine /> */}
                <ChefAbout />
            </div>
            <div className="">
                <Category /> 
            </div>
        </>
    );
};

export default Home;