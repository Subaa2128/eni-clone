import React from "react";
import Business from "../AboutUs/Business";
import Documents from "../AboutUs/documents";
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
      <Business />
      <Documents />
    </div>
  );
};

export default aboutUs;
