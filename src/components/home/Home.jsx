import React from 'react';
import Hero from '../headers/Hero';

const Home = () => {
    return (
        <>
            <div className="h-screen bg-hero-pattern bg-fixed bg-cover">
               <div className="h-screen bg-black bg-opacity-75">
                    <Hero />
               </div>
            </div>
        </>
    );
};

export default Home;