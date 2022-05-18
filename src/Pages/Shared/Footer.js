import React from 'react';
const Footer = () => {
    return (
        <div className="w-full grid grid-cols-1">
            < footer className="bg-[url('/src/assets/images/footer.png')] footer p-12 bg-cover text-base-content flex justify-between grid grid-cols-1">
                < div >
                    <span className="footer-title">Services</span>
                    < a className="link link-hover">Emergency Checkup</a>
                    < a className="link link-hover">Monthly Checkup</a>
                    < a className="link link-hover">Weekly Checkup</a>
                    < a className="link link-hover">Deep Checkup</a>
                </div >
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    < a className="link link-hover">Cavity Filling</a>
                    < a className="link link-hover">Teath Whitening</a>
                </div >
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York- Hudson</a>
                </div >
            </footer >
            <p className='text-center'>Copyright 2022 All Rights Reserved</p>
        </div >
    );
};

export default Footer;