import React from "react";
import Natural from "../components/Natural";
import Topic from "../components/Topic";
import CoralSouthProject from "../home/CoralSouthProject";
import Technological from "../home/Technological";

const home = () => {
  return (
    <div>
      <Topic />
      <CoralSouthProject />
      <Natural />

      <Technological />
    </div>
  );
};

export default home;
