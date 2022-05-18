import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Care from './Care';
import Form from './Form';
import Information from './Information';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Information />
            <Services></Services>
            <Care></Care>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;