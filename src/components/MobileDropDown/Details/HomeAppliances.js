import React from "react";
import Details from "./Details";
import data from "./detailsData";

const HomeAppliances = ({ largerScreens }) => {
  const { homeAppliances } = data;
  return <Details {...homeAppliances} largerScreens={largerScreens} />;
};

export default HomeAppliances;
