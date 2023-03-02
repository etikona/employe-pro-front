import React from 'react';
import './Rest.css';
const Rest = () => {
    return (
        <div className='hero min-h-screen'>
            <div className='hero-content flex-col lg:flex-row'>
                <div>

                    <h3 className='text-3xl text-black'>Rest of</h3>
                    <h2 className='text-5xl text-purple-400'>Where </h2>

                </div>
                <div className=" justify-end flex ">

                    <div className='round mx-4'>

                        <h2 className='text-orange-800 text-5xl font-bold'>55823+</h2>
                        <p className='text-2xl text-purple-400 font-bold'>Consumer <br />
                            Purses</p>
                    </div>
                    <div className='border border-stone-500 round mx-4'>
                        <h2 className='text-green-500 text-5xl font-bold'>55823+</h2>
                        <p className='text-2xl text-purple-400 font-bold'>Company <br />
                            Growth</p>
                    </div>
                    <div className='border border-stone-500 round mx-4'>
                        <h2 className='text-cyan-400 text-5xl font-bold'>55823+</h2>
                        <p className='text-2xl text-purple-400 font-bold'>Missing those <br />
                            learners</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Rest;