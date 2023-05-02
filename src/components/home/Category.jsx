import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        fetch('https://amber-chef-codewithhasib.vercel.app/api/category')
        .then(res => res.json())
        .then(data => setCategoryData(data))
        .catch(err => console.log(err))
    },[])
    console.log(categoryData);
    return (
        <div>
            
        </div>
    );
};

export default Category;