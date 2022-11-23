import React from "react";
import Map from "../contacts/Map";
import RegisteredHead from "../contacts/RegisteredHead";
import Branches from "../contacts/Branches";
import Card from "../contacts/Card";
import Voucher from "../contacts/Voucher";
import JoinTheWorld from "../contacts/JoinTheWorld";
import KeepInTouch from "../contacts/KeepIn-Touch";
import Laptop from "../contacts/Laptop";

const contact = () => {
  return (
    <div>
      <RegisteredHead />
      <Map />
      <Branches />
      <Map />
      <Voucher />
      <JoinTheWorld />
      <Card />
      <KeepInTouch />
      <Laptop />
    </div>
  );
};

export default contact;
