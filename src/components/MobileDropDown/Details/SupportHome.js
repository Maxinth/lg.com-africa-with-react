import React from "react";
import Details from "./Details";
import data from "./detailsData";

const SupportHome = () => {
  const { supportHome } = data;
  return <Details {...supportHome} />;
};

export default SupportHome;
