import React from 'react';
import ProConsumer from './ProConsumer';
import Rest from './Rest';

const Home = () => {
    return (
        <div className='bg-emerald-200'>
            <ProConsumer/>
            <Rest/>
        </div>
    );
};

export default Home;