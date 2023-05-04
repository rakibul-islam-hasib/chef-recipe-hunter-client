import React from 'react';
import Hero from '../headers/Hero';
import ChefAbout from './ChefAbout';
import Category from './Category';
import Chef from './cooking/Chef';
import bgImg from '../../assets/img2.jpg'
import Features from './Features';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero2 from '../headers/Hero2';
import Hero3 from '../headers/Hero3';
import NewsLetter from './NewsLetter';
const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImg})` }} className="h-screen  bg-fixed bg-cover">
                <div className="h-screen bg-black bg-opacity-75">
                    {/* <Hero /> */}
                    <Swiper
                        navigation={true}
                        pagination={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[Pagination, Navigation , Autoplay]}
                    >
                        <SwiperSlide><Hero /></SwiperSlide>
                        <SwiperSlide><Hero2 /></SwiperSlide>
                        <SwiperSlide><Hero3 /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="my-14">
                <ChefAbout />
            </div>
                <Features />
                <Chef />
                <Category />
                <NewsLetter />
        </>
    );
};

export default Home;