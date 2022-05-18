import React, { useState } from 'react';
import Footer from '../Shared/Footer'
import AppointmentBanner from './AppointmentBanner';
import BookingCards from './BookingCards';

const GetAppointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <BookingCards date={date}></BookingCards>
            <Footer></Footer>
        </div>
    );
};

export default GetAppointment;