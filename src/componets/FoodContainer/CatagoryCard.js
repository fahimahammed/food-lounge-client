import React from 'react';

const CatagoryCard = ({catagory, setCatId}) => {

    const getCatagoryId = (id) =>{
        setCatId(id);
    }
    // console.log(catagory)
    return (
        <div onClick={()=>getCatagoryId(catagory.id)} className='h-28 w-48 m-12 shadow-lg flex items-center justify-center'>
            <h3 className='text-xl font-bold'>{catagory.title}</h3>
        </div>
    );
};

export default CatagoryCard;