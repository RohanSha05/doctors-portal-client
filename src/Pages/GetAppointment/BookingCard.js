import React from 'react';

const BookingCard = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" text-center text-secondary text-xl">{name}</h2>
                <p className='text-center  text-sm'>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No slot available</span>
                    }
                </p>
                <p className='text-center  text-sm'> {slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'}  AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(appointment)}
                        disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-sm bg-gradient-to-r from-secondary to-primary btn-primary text-white">Book Appointment</label>

                </div>
            </div>
        </div >
    );
};

export default BookingCard;