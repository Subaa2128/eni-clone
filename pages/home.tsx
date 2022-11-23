import React from "react";
import Hero from "../components/Hero";
import Natural from "../components/Natural";
import Topic from "../components/Topic";
import CoralSouthProject from "../home/CoralSouthProject";
import News from "../home/News";
import PressReleases from "../home/PressReleases";
import Technological from "../home/Technological";

const home = () => {
  return (
    <div>
      <Hero />
      <Topic />
      <PressReleases />
      <CoralSouthProject />
      <News />
      <Natural />
      <Technological />
    </div>
  );
};

export default home;
