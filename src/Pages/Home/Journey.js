import React from 'react';
import antLaptop from '../../Assets/ant with laptop-01.png';
const Journey = () => {
    return (
        <div>
            <section className='flex'>
                <div className=''>
                    <h2 className='text-4xl text-black text-left ml-12 my-12 mr-5 font-semibold'>
                        Start your 150+ days <br />
                        journey with us
                    </h2>
                    <button className='bg-purple-400 text-white font-semibold p-2 rounded mt-20'>Join Now</button>
                </div>
                <div>
                    <img width="500px" src={antLaptop} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Journey;