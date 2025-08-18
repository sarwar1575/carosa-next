"use client";

import Advertisement from "../home/Advertisement";
import AskAssistance from "../home/AskAssistance";
import ExploreOurFullCollection from "../home/ExploreOurFullCollection";
import OurMission from "../home/OurMission";
import Stories from "../home/Stories";
import BharosaOfCarosa from "./BharosaOfCarosa";
import CarosaWork from "./CarosaWork";
import ChoseCarosa from "./ChoseCarosa";
import SellBanner from "./SellBanner";

function SellCarsPages() {
  return (
    <>
      <SellBanner />
      <Advertisement />
      <CarosaWork />
      <ChoseCarosa />
      <BharosaOfCarosa />
      <ExploreOurFullCollection />
      <Stories />
      <OurMission />
      <AskAssistance />
      
    </>
  )
}

export default SellCarsPages;
