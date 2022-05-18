import React from 'react';

const Form = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] flex justify-center p-16">
            < div className="">
                < h2 className='text-secondary text-center bold-lg' > Contact Us</h2 >
                <h2 className='text-center text-3xl text-white'>Stay connected with us</h2>
                <div>
                    <input type="email" placeholder="Email address" className="input block m-5 input-bordered input-sm w-96 max-w-xs" />
                    <input type="text" placeholder="Subject" className="input block m-5 input-bordered input-md w-96 max-w-xs" />
                    <input type="text" placeholder="Your massage" className="input block m-5 input-bordered input-lg w-96 h-28 max-w-xs" />
                    <div className='flex justify-center'>
                        <button className="btn w-28 bg-gradient-to-r from-secondary to-primary">Submit</button>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Form;