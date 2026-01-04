import React, { useEffect, useState } from 'react';
import Banner from './Banner ';
import CategorySection from './CategorySection';
import LatestCleans from './LatestCleans';
import ExtraSections from '../Components/ExtraSections';
import Loader from '../Components/Loader';
import Features from './Features';
import HowItWorks from './HowItWorks';

const Home = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    document.title = "Home | Cleanliness ";
  }, []);


     useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>; 
  }
    return (
        <div>
        
        <Banner></Banner>
        <CategorySection></CategorySection>
        <LatestCleans></LatestCleans>
        <ExtraSections></ExtraSections>
        <Features></Features>
        <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;