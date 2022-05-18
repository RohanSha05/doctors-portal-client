import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import BookingModal from './BookingModal';

const BookingCards = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }
        , [])
    return (
        <div>
            <h1 className='text-secondary text-xl text-center'>Available Appointments on {format(date, "PP")}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:m-28'>
                {
                    appointments.map(appointment => <BookingCard key={appointment._id} appointment={appointment}
                        setTreatment={setTreatment}
                    ></BookingCard>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default BookingCards;