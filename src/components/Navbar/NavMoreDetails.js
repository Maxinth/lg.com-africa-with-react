import React from "react";
import AirConditioners from "../MobileDropDown/Details/AirConditioners";
import ComputerProducts from "../MobileDropDown/Details/ComputerProducts";
import HomeAppliances from "../MobileDropDown/Details/HomeAppliances";
import SupportHome from "../MobileDropDown/Details/SupportHome";
import TvAndHome from "../MobileDropDown/Details/TvAndHome";
import "./moreDetails.css";
import { useGlobalContext } from "../Context";

const NavMoreDetails = () => {
  const { productItems, showItems, bothItemsHidden } = useGlobalContext();
  const positionClass = showItems.support ? "supportDetails" : "productItems";
  const displayClass =
    showItems.support || showItems.products ? "isShown" : "isHidden";
  // showing a border based on the presence of at least child element
  const borderClass =
    showItems.products || showItems.support ? "showBorder" : "";

  // ${ displayClass}`
  return (
    <section
      className={`navMoreDetails  ${borderClass} ${displayClass}`}
      // hide both items when user enters and THEN leaves
      onMouseLeave={bothItemsHidden}
    >
      {/* show this part when products are true - then show the component matching the item currently true */}
      {showItems.products && (
        <>
          {productItems.ac && <AirConditioners largerScreens={true} />}
          {productItems.computer && <ComputerProducts largerScreens={true} />}
          {productItems.homeAppliances && (
            <HomeAppliances largerScreens={true} />
          )}
          {productItems.support && <SupportHome largerScreens={true} />}
          {productItems.tv && <TvAndHome largerScreens={true} />}
        </>
      )}

      {/* show this part when products are false */}
      <>
        {showItems.support && (
          <section className={`navMoreDetails__support ${positionClass}`}>
            <SupportHome largerScreens={true} desktopVersion={true} />
          </section>
        )}
      </>
    </section>
  );
};

export default NavMoreDetails;
