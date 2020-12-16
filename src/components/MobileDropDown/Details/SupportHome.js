import React from "react";
import Details from "./Details";
import data from "./detailsData";

const SupportHome = ({ largerScreens, desktopVersion }) => {
  const { supportHome, supportHomeDesktop } = data;
  // when the desktopVersion is true
  if (desktopVersion) {
    return (
      <Details
        {...supportHomeDesktop}
        largerScreens={largerScreens}
        desktop={desktopVersion}
      />
    );
  }
  // otherwise render this
  return <Details {...supportHome} largerScreens={largerScreens} />;
};

export default SupportHome;
