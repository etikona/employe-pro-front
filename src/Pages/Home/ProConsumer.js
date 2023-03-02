import React from 'react';
import ant from '../../Assets/ant-removebg-preview.png'
const ProConsumer = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ant} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black'>
                        <h3 className="text-4xl font-bold">
                            Don’t Be Pro Consumer <br />
                            Be Pro Profesional</h3>
                        <p className="py-6">
                           
                            You have a lot of learning resources,But have no guideline. <br />
                            We are employee Pro, come here to guide you!  
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProConsumer;