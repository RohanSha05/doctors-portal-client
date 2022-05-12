import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import './info.css'

const Information = () => {
    return (
        <div className='flex justify-between '>
            <div class="card c-size lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure className='ml-4'><img src={clock} alt="Album" /></figure>
                <div class="card-body flex items-center text-white">
                    <div>
                        <h2 class="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
            <div class="card c-size lg:card-side bg-accent">
                <figure className='ml-4'><img src={marker} alt="Album" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title text-white">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card c-size lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure className='ml-4'><img src={phone} alt="Album" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">Contact us now</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default Information;