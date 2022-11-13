import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    console.log(food)
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure><img src={food.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food.name}</h2>
                <p>$ {food.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/food-details/${food.id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;