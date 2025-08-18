"use client"; 

import React from 'react'
import HomeBanner from './HomeBanner';
import Advertisement from './Advertisement';
import LookingForCar from './LookingForCar';
import RecentlyViewedCars from './RecentlyViewedCars';
import ExploreOurFullCollection from './ExploreOurFullCollection';
import BrowseType from './BrowseType';
import Latestfromautoverse from './Latestfromautoverse';
import YourFavoriteBrand from './YourFavoriteBrand';
import Stories from './Stories';
import OurMission from './OurMission';
import AskAssistance from './AskAssistance';

function Home() {
  return (
    <div>
        <HomeBanner />
        <Advertisement />
        <LookingForCar />
        <RecentlyViewedCars />
        <ExploreOurFullCollection />
        <BrowseType />
        <Latestfromautoverse />
        <YourFavoriteBrand />
        <Stories />
        <OurMission />
        <AskAssistance />
      {/* All Home Componets will Import Hare  */}
    </div>
  )
}

export default Home;
