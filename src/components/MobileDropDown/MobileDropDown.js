import React, { useRef, useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useGlobalContext } from "../Context";
import "./dropDown.css";
import MobileSearchBox from "./MobileSearchBox";
import TvAndHome from "./Details/TvAndHome";
import HomeAppliances from "./Details/HomeAppliances";
import AirConditioners from "./Details/AirConditioners";
import ComputerProducts from "./Details/ComputerProducts";
import SupportHome from "./Details/SupportHome";

const MobileDropDown = () => {
  const {
    showNavItems,
    bar,
    toggleBar,
    showDetails,
    itemClicked,
    // closeSearchBox,
    // isSearchInView,
  } = useGlobalContext();

  const dropDiv = useRef(null);
  const detailsRef = useRef(null);

  // state for adjusting height of container based on menu click
  const [currentHeight, setCurrentHeight] = useState(0);
  const [backdropTop, setBackDropTop] = useState(0);

  useEffect(() => {
    let dropDivHeight = dropDiv.current.getBoundingClientRect().height;

    // setting the height of .mobileDropDown to the height of its container div
    if (bar) {
      setCurrentHeight(dropDivHeight);
      // setCurrentHeight(100);
    } else {
      setCurrentHeight(0);
    }
  }, [bar]);

  useEffect(() => {
    let dropDivHeight = dropDiv.current.getBoundingClientRect().height;
    let detailsHeight = detailsRef.current.getBoundingClientRect().height;

    if (!showNavItems) {
      setCurrentHeight(dropDivHeight);
      // adjusting the top offset of the backdrop when the details are in view
      setBackDropTop(detailsHeight + dropDivHeight / 4);
    } else {
      // the 150 added here is hard-coded - obtained after trial and error
      setBackDropTop(dropDivHeight + 150);
    }
  }, [showNavItems]);

  // a function which adds to the backdrop offset based on the item clicked upon
  const topOffsetByItem = () => {
    let amount;
    // when each of the details page are in view
    if (showDetails.tv) {
      amount = 20;
    } else if (showDetails.homeAppliances) {
      amount = 0;
    } else if (showDetails.ac) {
      amount = 120;
    } else if (showDetails.computer) {
      amount = 180;
    } else if (showDetails.support) {
      amount = 70;
    } else {
      amount = 0; // initial view when home is clicked from the other details components
    }
    return backdropTop + amount;
  };

  return (
    <section
      className="mobileDropDown"
      style={{ height: `${currentHeight}px` }}
    >
      <div ref={dropDiv}>
        <h3>LG ThinQ</h3>
        {/* ==== mobileSearchBox initially hidden via its opacity  =====*/}
        <MobileSearchBox />
        {/* which is toggled between 0 and 1 via the nav-search icon click */}

        {/* this nav is unmounted when showNavItems becomes false -  this event together with the specific item clicked brings the details component into view */}
        {showNavItems && (
          <ul className="mobileDropDown__nav">
            <li
              className="mobileDropDown__listItem"
              onClick={() => itemClicked("tv")}
            >
              tv & home entertainment <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              onClick={() => itemClicked("homeAppliances")}
            >
              home appliances <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              onClick={() => itemClicked("ac")}
            >
              air conditioners <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              onClick={() => itemClicked("computer")}
            >
              computer products <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              onClick={() => itemClicked("support")}
            >
              support home <ArrowForwardIosOutlinedIcon />
            </li>
            <li className="mobileDropDown__listItem account">
              <PersonOutlineOutlinedIcon /> Sign In / Sign Up
            </li>
          </ul>
        )}

        {/* moreDetails section housing the details of the specific item clicked. it is followed by the corresponding backdrop */}
        <section className={`mobileDropDown__moreDetails `} ref={detailsRef}>
          {/* when showNavItems becomes false and one of the details component is clicked - only that
          component is mounted */}
          {!showNavItems && showDetails.tv && <TvAndHome />}
          {!showNavItems && showDetails.homeAppliances && <HomeAppliances />}
          {!showNavItems && showDetails.ac && <AirConditioners />}
          {!showNavItems && showDetails.computer && <ComputerProducts />}
          {!showNavItems && showDetails.support && <SupportHome />}
        </section>
        {/* backdrop only gets shown when the bar menu is clicked and set to true */}
        {bar && (
          <div
            className="mobileDropDown__backdrop"
            onClick={toggleBar} // toggleBar closes the bar when the backdrop is clicked upon
            style={{ top: `${topOffsetByItem()}px` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default MobileDropDown;
