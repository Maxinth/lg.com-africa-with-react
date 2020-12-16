import React from "react";
import Details from "./Details";
import data from "./detailsData";

const AirConditioners = ({ largerScreens }) => {
  const { airConditioners } = data;
  return <Details {...airConditioners} largerScreens={largerScreens} />;
};

export default AirConditioners;
