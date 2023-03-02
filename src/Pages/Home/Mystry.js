import React from 'react';
import video from '../../Assets/video-tutorial.png';
import aminities from '../../Assets/amenities.png';
import business from '../../Assets/businessman.png';
import online from '../../Assets/online-learning.png';
const Mystry = () => {
    return (
        <div>
            <section className='text-black'>
                <p className='text-4xl text-left ml-12  font-semibold'>What is the mystry behind <br /> of the Scenario...</p>
                <div className='grid grid-cols-2 mx-20 my-10'>
                    <div className='flex my-5 mx-5'>
                        <div>
                            <img src={video} width="350px" alt="" />

                        </div>
                        <div>
                            <h3 className='text-xl'> Unfinished Course </h3>
                            <p>
                                A little break can fully distrack someone. Where we have a lot of issues like formal education,inpatients,focused on many things at a same time.
                            </p>
                        </div>
                    </div>
                    <div className='flex my-5 mx-5'>
                        <div>
                            <img src={aminities} width="200px" alt="" />

                        </div>
                        <div>
                            <h3 className='text-xl'> Inadequate Materials & Facilities</h3>
                            <p>
                                Skills without enough facilities results nothing
                            </p>
                        </div>
                    </div>
                    <div className='flex my-5 mx-5'>
                        <div>
                            <img src={business} width="350px" alt="" />

                        </div>
                        <div>
                            <h3 className='text-xl'> Lack of Career Guidance </h3>
                            <p>
                                Someone have skills but have no idea about where to show or how to use it then it means nothing.
                            </p>
                        </div>
                    </div>
                    <div className='flex my-5 mx-5'>
                        <div>
                            <img src={online} width="400px" alt="" />

                        </div>
                        <div>
                            <h3 className='text-xl'> Inexperienced Instructor </h3>
                            <p>
                                Those teacher take the class are not muchexperience in their own strong zone, so weengaiged those teacher who are specificallymaster on thir own strong zone. And deliver theirown strong zone.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Mystry;