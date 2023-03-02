import React from 'react';
import FAQ from './FAQ';
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
            {/* 
            1) Solution section should added here
            2) Support section should added here.
            */}
            <FAQ/>
        </div>
    );
};

export default Home;