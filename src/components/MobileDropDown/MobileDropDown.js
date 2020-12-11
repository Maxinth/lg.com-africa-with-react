import React, { useRef, useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useGlobalContext } from "../Context";
import "./dropDown.css";
import MobileSearchBox from "./MobileSearchBox";

import TvAndHome from "./Details/TvAndHome";

const MobileDropDown = () => {
  const {
    showNavItems,
    toggleNavItems,
    bar,
    toggleBar,
    // closeSearchBox,
    // isSearchInView,
  } = useGlobalContext();

  const dropDiv = useRef(null);
  const detailsRef = useRef(null);

  // state for adjusting height of container based on menu click
  const [currentHeight, setCurrentHeight] = useState(0);
  const [backdropTop, setBackDropTop] = useState(0);
  // state for displaying items based on item click
  const [dropItems, setDropItems] = useState({
    tv: false,
    home: false,
    ac: false,
    computer: false,
    support: false,
  });
  const ItemClicked = (e) => {
    toggleNavItems();
    // if(e.target.parent.contains(`#${e.target.id}`) || e.target.id === [e.target.id]){
    setDropItems({
      tv: false,
      home: false,
      ac: false,
      computer: false,
      support: false,
      [e.target.id]: true,
    });
  };

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
      setBackDropTop(detailsHeight + 150);
    } else {
      setBackDropTop(dropDivHeight + 150);
    }
  }, [showNavItems]);

  const detailsClass = showNavItems ? "shown" : "hidden";
  return (
    <section
      className="mobileDropDown"
      style={{ height: `${currentHeight}px` }}
      // style={{ height: `${currentHeight}vh` }}
    >
      <div ref={dropDiv}>
        <h3>LG ThinQ</h3>
        {bar && <MobileSearchBox />}
        {showNavItems && (
          <ul className="mobileDropDown__nav">
            <li
              className="mobileDropDown__listItem"
              id="tv"
              onClick={ItemClicked}
            >
              tv & home entertainment <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              id="home"
              onClick={ItemClicked}
            >
              home appliances <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              id="ac"
              onClick={ItemClicked}
            >
              air conditioners <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              id="computer"
              onClick={ItemClicked}
            >
              computer products <ArrowForwardIosOutlinedIcon />
            </li>
            <li
              className="mobileDropDown__listItem"
              id="support"
              onClick={ItemClicked}
            >
              support home <ArrowForwardIosOutlinedIcon />
            </li>
            <li className="mobileDropDown__listItem account">
              <PersonOutlineOutlinedIcon /> Sign In / Sign Up
            </li>
          </ul>
        )}

        <section
          className={`mobileDropDown__moreDetails ${detailsClass}`}
          ref={detailsRef}
        >
          {!showNavItems && <TvAndHome />}
        </section>
        {bar && (
          <div
            className="mobileDropDown__backdrop"
            onClick={toggleBar}
            style={{ top: `${backdropTop}px` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default MobileDropDown;
