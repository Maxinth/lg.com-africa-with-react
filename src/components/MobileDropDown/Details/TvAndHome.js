import React from "react";
import Details from "./Details";
import data from "./detailsData";
const TvAndHome = ({ largerScreens }) => {
  const { tv } = data;
  return <Details {...tv} largerScreens={largerScreens} />;
};

export default TvAndHome;
