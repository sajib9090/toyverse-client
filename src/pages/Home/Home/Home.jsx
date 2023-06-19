import React from 'react';
import Banner from '../../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import Shop from '../../Shop/Shop';
import Banner2 from '../../Banner2/Banner2';

const Home = () => {
    return (
        <>
            <Banner/>
            <Banner2/>
            <Gallery/>
            <Shop/>
        </>
    );
};

export default Home;