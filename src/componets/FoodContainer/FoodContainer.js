import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryCard from './CatagoryCard';
import FoodCard from './FoodCard';

const FoodContainer = () => {
    const catagoryData = useLoaderData()
    const [catId, setCatId] = useState(1);
    const [foodData, setFoodData] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/foods-by-catagory/${catId}`)
        .then(res=> res.json())
        .then(data => setFoodData(data))
    }, [catId])

    return (
        <div>
             <h1 className='text-center m-4 font-bold text-2xl'>Choose your food..</h1>
             <div className='flex flex-wrap justify-center'>
                {
                    catagoryData.map(catagory => <CatagoryCard key={catagory.id} setCatId={setCatId} catagory={catagory}></CatagoryCard>)
                }
             </div>
             <div className='flex justify-center'>
                {
                    foodData.map(food=> <FoodCard key={food.id} food={food}></FoodCard>)
                }
             </div>
        </div>
    );
};

export default FoodContainer;