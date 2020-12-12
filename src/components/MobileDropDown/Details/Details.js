import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeIcon from "@material-ui/icons/Home";
import "./details.css";
import { useGlobalContext } from "../../Context";

const Details = ({ mainTitle, list = [] }) => {
  const { toggleNavItems, backToInitial } = useGlobalContext();

  const toggleViewAndRevert = () => {
    toggleNavItems();
    backToInitial();
  };
  return (
    <section className="details">
      <h4 className="details__mainTitle">
        <HomeIcon onClick={toggleViewAndRevert} />
        <span>{mainTitle}</span>
      </h4>
      <ul className="details__nav">
        {list.map((eachItem, index) => {
          const { navTitle, items } = eachItem;
          return (
            <li className="details__mainListItem" key={index}>
              <span className="details__innerTitle">
                {" "}
                {navTitle} <ArrowForwardIosIcon />
              </span>
              {items.length !== 0 && (
                <ul className="details__innerNav">
                  {items.map((innerItem, index) => (
                    <li className="details__innerListItem" key={index}>
                      {innerItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Details;
