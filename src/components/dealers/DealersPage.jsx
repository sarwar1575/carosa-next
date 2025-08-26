"use client";

import Advertisement from "../home/Advertisement";
import AskAssistance from "../home/AskAssistance";
import OurMission from "../home/OurMission";
import Stories from "../home/Stories";
import BharosaOfCarosa from "../sell/BharosaOfCarosa";
import CarosaWork from "../sell/CarosaWork";
import ChoseCarosa from "../sell/ChoseCarosa";
import DealersBanner from "./DealersBanner";

function DealersPage() {
  return (
    <>
      <DealersBanner />
      <Advertisement />
      <ChoseCarosa />
      <CarosaWork />
      <BharosaOfCarosa />
      <Stories />
      <OurMission />
      <AskAssistance />
    </>
  )
}

export default DealersPage;
