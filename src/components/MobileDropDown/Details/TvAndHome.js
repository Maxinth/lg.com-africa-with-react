import React from "react";
import Details from "./Details";
import data from "./detailsData";
const TvAndHome = () => {
  const { tv } = data;
  return <Details {...tv} />;
};

export default TvAndHome;
