import React from 'react';
import Banner from './Banner ';
import CategorySection from './CategorySection';
import LatestCleans from './LatestCleans';
import ExtraSections from '../Components/ExtraSections';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <CategorySection></CategorySection>
        <LatestCleans></LatestCleans>
        <ExtraSections></ExtraSections>
            
        </div>
    );
};

export default Home;