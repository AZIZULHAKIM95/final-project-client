import React from 'react';
import M from '../../images/M.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={M} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-emerald-500">INNOVATIVE ELASTOMERS.</h1>
                    <h1 className="text-5xl font-bold text-emerald-500">WORLD-CLASS SERVICE.</h1>
                    <p className="py-6 text-emerald-900">Demanding application require the best materials. Put our 10+years industry-leading synthetic rubber experience, innovation, technical service in work to you.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;