import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            "img": fluoride,
            "name": "Fluoride Treatment",
            'description': "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "img": cavity,
            "name": "Cavity Filling",
            'description': "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "img": whitening,
            "name": "Teeth Whitening",
            'description': "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div>
            <h2 className='text-center text-xl uppercase mb-4'>Our Services</h2>
            <h2 className='text-center text-4xl' >Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;