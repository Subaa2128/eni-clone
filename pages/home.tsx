import React from "react";
import Natural from "../components/Natural";
import Topic from "../components/Topic";
import CoralSouthProject from "../home/CoralSouthProject";
import PressReleases from "../home/PressReleases";
import Technological from "../home/Technological";

const home = () => {
  return (
    <div>
      <Topic />
      <PressReleases />
      <CoralSouthProject />
      <Natural />
      <Technological />
    </div>
  );
};

export default home;