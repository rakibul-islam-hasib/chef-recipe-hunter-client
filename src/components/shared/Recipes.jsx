import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatNumber } from '../../utilities/NumberFormate';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FcApproval } from 'react-icons/fc';
import { Tooltip } from 'react-tooltip';

const Recipes = () => {
    const { id } = useParams();
    const [chef, setChef] = useState({});
    useEffect(() => {
        fetch(`https://amber-chef-codewithhasib.vercel.app/api/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(err => console.log(err))
    }, [])
    // console.log(chef)
    const { name, img, num_recipes, years_of_experience, likes, recipes, description, verify } = chef;
    return (
        <>
            <div className="h-screen">
                <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                        <div
                            className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight inline-flex items-center gap-3 font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                                <span className=" text-indigo-600 inline-flex items-center xl:inline">{name}</span>
                                {verify && <span
                                    data-tooltip-variant="info"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-place="top"
                                    data-tooltip-content="Verified" className='text-2xl md:text-3xl inline'><FcApproval /></span>}
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {description}
                                <span className='block text-primary text-2xl font-bold text-center my-5'>
                                    <span className='text-black'>Total :</span>{num_recipes} Recipes</span>
                            </p>
                            {/* <!-- Button Section --> */}
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                        {formatNumber(likes)} Likes
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        {years_of_experience} Years of Experience
                                    </a>
                                </div>
                            </div>
                            {/* <!-- End of Button Section --> */}
                        </div>

                        {/* <!--   Image Section     --> */}
                        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                            <LazyLoadImage className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={img} alt="" />
                            {/* <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={img} alt="" /> */}
                        </div>
                        {/* <!--   End of Image Section     --> */}
                    </div>

                </section>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="">
                    <h1 className='text-5xl text-center font-sans font-bold'>Recipes From <span className='text-primary'>{name}</span></h1>
                    <p className='text-center my-4'>Explore our collection of mouthwatering dishes today and find your next favorite recipe...!</p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">

                    {
                        recipes?.map((recipe, i) => {

                            return (
                                <li key={i} className="relative border  p-2 rounded-xl h-full flex flex-col sm:flex-row xl:flex-col items-start">
                                    <div className="order-1 sm:ml-6 xl:ml-0">
                                        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                            <span className="mb-1 block text-sm leading-6 text-indigo-500">{recipe?.name}</span></h3>
                                        <div className=" text-slate-600 flex flex-col justify-between ">
                                            <span className='flex justify-between flex-col '>
                                                <span className='block font-bold'>Ingredients</span>
                                                {/* <span className='block'>{ingredients}</span> */}
                                                <ul className='list-decimal ml-6'>
                                                    {
                                                        recipe?.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                                                    }
                                                </ul>
                                                <span className='block font-bold'>Instructions</span>
                                            </span>
                                            <div className='block mt-auto'>{recipe?.instructions}</div>
                                        </div>

                                    </div>

                                    {/* <img src={recipe?.image} alt="" /> */}
                                    <LazyLoadImage src={recipe?.image}
                                        className="mb-6 h-[200px] shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Tooltip float={true} place='top' id="my-tooltip" />
        </>
    );
};

export default Recipes;