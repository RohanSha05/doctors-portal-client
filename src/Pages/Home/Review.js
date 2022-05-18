import React from 'react';

const Review = ({ review }) => {
    return (
        <div style={{ width: 385, height: 275 }} className='p-8 border-2 drop-shadow-2xl rounded-lg'>
            <div>
                <p>{review.review}</p>
            </div>
            <div className="avatar flex mt-7">
                <div style={{ width: 75, height: 75 }} className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.img} alt="#" />
                </div>
                <div className='m-3'>
                    <h1 className='font-bold'>{review.name}</h1>
                    <p className='font-normal'>{review.address}</p>
                </div>
            </div >
        </div >
    );
};

export default Review;