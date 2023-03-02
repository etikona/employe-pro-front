import React from 'react';
import dashboard from '../../Assets/dashboard.jpg';
const Social = () => {
    return (
        <div className='my-20'>
            <h2 className='text-4xl text-black text-left ml-12  font-semibold'>
                Invest your wasting time in <br />
                social media.
            </h2>
            <section className='flex mx-20 my-10'>
                <div className='text-black my-8 mr-5'>
                    <p className='text-lg'>
                        If you invest this time in Employee Pro your life will changed within 150 days. Change within 10 days.
                    </p>
                    <p className='text-lg'>
                        Average social media using time  of a people in Bangladesh is 4 hours.
                    </p>
                </div>
                <div>
                    <img src={dashboard} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Social;