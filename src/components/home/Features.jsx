import React from 'react';
import cooking from '../../assets/cooking.svg';
import chefImg from '../../assets/icons8-chef.svg';
import star from '../../assets/icons8-star.svg';
import user from '../../assets/icons8-user.svg';
const Features = () => {
    const data = [
        {
            id: 1,
            icon: cooking,
            title: 'Recipes',
            count: '2.7K'
        },
        {
            id: 2,
            icon: chefImg,
            title: 'Chefs',
            count: '42'
        },
        {
            id: 3,
            icon: star,
            title: 'Ratings',
            count: '4.6'
        },
        {
            id: 4,
            icon: user,
            title: 'Users',
            count: '1.3K'
        }
    ]
    return (
        <section className="text-gray-700 w-[90%] mx-auto">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4 text-center">
                    {
                        data.map(item => <div key={item.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            {/* Mouse right click disabled */}
                            <div onContextMenu={(e)=>e.preventDefault()} className="border-2 border-primary cursor-pointer px-4 py-6 rounded-lg transform transition duration-300 hover:scale-105">

                                <img src={item.icon} alt="" className="w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-gray-900">{item.count}</h2>
                                <p className="leading-relaxed">{item.title}</p>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </section>
    );
};

export default Features;