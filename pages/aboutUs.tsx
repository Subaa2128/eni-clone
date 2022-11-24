import React from "react";
import Management from "../AboutUs/Management";
import OurActivities from "../AboutUs/OurActivities";
import OurManagers from "../AboutUs/OurManagers";
import WhoweareFinancial from "../AboutUs/WhoweareFinancial";

const aboutUs = () => {
  return (
    <div>
      <WhoweareFinancial />
      <OurActivities />
      <Management />
      <OurManagers />
    </div>
  );
};

export default aboutUs;
