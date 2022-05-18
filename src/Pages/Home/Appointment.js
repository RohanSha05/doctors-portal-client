import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'

const Appointment = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row text-white  bg-my-bg1">
                    <div className='flex-1 mt-[-0px] hidden lg:block' >
                        <img src={doctorSmall} />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-primary mb-3 bold'>Appointment</h1>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Appointment;