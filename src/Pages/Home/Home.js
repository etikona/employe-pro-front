import React from 'react';
import Mystry from './Mystry';
import ProConsumer from './ProConsumer';
import Rest from './Rest';

const Home = () => {
    return (
        <div className='bg-emerald-200'>
            <ProConsumer/>
            <Rest/>
            <Mystry/>
        </div>
    );
};

export default Home;