import React from 'react';
import Banner from './Banner ';
import CategorySection from './CategorySection';
import LatestCleans from './LatestCleans';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <CategorySection></CategorySection>
        <LatestCleans></LatestCleans>
            
        </div>
    );
};

export default Home;