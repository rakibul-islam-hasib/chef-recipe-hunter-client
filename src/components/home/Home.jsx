import React from 'react';
import Hero from '../headers/Hero';
import TimeLine from './TimeLine';
import ChefAbout from './ChefAbout';
import Category from './Category';
import Chef from './cooking/Chef';
import bgImg from '../../assets/img2.jpg'
const Home = () => {
    return (
        <>
            <div style={{backgroundImage : `url(${bgImg})`}} className="h-screen  bg-fixed bg-cover">
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
            <div className="">
                <Chef />
            </div>
        </>
    );
};

export default Home;