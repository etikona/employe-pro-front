import React from 'react';
import Journey from './Journey';
import Mystry from './Mystry';
import ProConsumer from './ProConsumer';
import Rest from './Rest';
import Social from './Social';

const Home = () => {
    return (
        <div className='bg-emerald-200'>
            <ProConsumer />
            <Rest />
            <Mystry />
            <Social />
            <Journey />
        </div>
    );
};

export default Home;