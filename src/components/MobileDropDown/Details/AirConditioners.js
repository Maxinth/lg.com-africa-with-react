import React from "react";
import Details from "./Details";
import data from "./detailsData";

const AirConditioners = () => {
  const { airConditioners } = data;
  return <Details {...airConditioners} />;
};

export default AirConditioners;
