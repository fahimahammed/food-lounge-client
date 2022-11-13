import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='text-center mx-auto'>
            <h2 className='font-bold text-4xl'>{details.name}</h2>
            <img className='w-96 mx-auto my-8' src={details.img} alt=""></img>

            <div>
                <Link to='/checkout'><button className='btn btn-primary'>Order Now</button></Link>
            </div>
        </div>
    );
};

export default FoodDetails;