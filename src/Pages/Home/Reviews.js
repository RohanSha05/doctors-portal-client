import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            "name": "Winson Herry",
            "img": people1,
            "address": "California",
            "review": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            "name": "Winson Herry",
            "img": people2,
            "address": "California",
            "review": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            "name": "Winson Herry",
            "img": people3,
            "address": "California",
            "review": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div>
            <div className='mx-20 flex justify-between'>
                <div>
                    <h1 className="font-bold text-secondary">Testimonial</h1>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <img src={quote} alt="" className='w-24 lg:48' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 flex justify-center items-center mt-28 lg:mx-20 mb-16 lg:space-x-12 ">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div >
        </div >
    );
};

export default Reviews;