import React from "react";
import Details from "./Details";
import data from "./detailsData";

const HomeAppliances = () => {
  const { homeAppliances } = data;
  return <Details {...homeAppliances} />;
};

export default HomeAppliances;
