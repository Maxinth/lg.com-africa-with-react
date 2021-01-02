import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeIcon from "@material-ui/icons/Home";
import "./details.css";
import { useGlobalContext } from "../../Context";
import { motion } from "framer-motion";
import { IconVariant } from "../../variants";
import CloseIcon from "@material-ui/icons/Close";

// import image from "../../../assets/africa_gnb_genuine.webp";

const Details = ({ mainTitle, list = [], largerScreens, desktop }) => {
  // the largerScreens prop helps make this component reusable
  const {
    toggleNavItems,
    backToInitial,

    bothItemsHidden,
  } = useGlobalContext();

  const toggleViewAndRevert = () => {
    toggleNavItems();
    backToInitial();
  };

  return (
    <section className="details">
      <h4 className="details__mainTitle">
        {/* show this portion when largerScreens isn't passed in as a prop from Details component's Parent */}
        {!largerScreens && (
          <motion.span variants={IconVariant} whileHover="hover">
            <HomeIcon
              onClick={toggleViewAndRevert}
              className="details__homeIcon"
            />
          </motion.span>
        )}

        <span>{mainTitle}</span>
        {/* show this part only on larger screens */}
        {largerScreens && (
          <CloseIcon onClick={bothItemsHidden} className="details__closeIcon" />
        )}
      </h4>
      <ul className="details__nav">
        {list.map((eachItem, index) => {
          const { navTitle, items, image } = eachItem;

          return (
            <li className="details__mainListItem" key={index}>
              <span className="details__innerTitle">
                {navTitle}
                {/* show this portion when largerScreens isn't passed in as a prop from Details component's Parent */}
                {!largerScreens && <ArrowForwardIosIcon />}
              </span>
              {/* if the items array isn't empty render this */}
              {items.length !== 0 ? (
                <ul className="details__innerNav">
                  {items.map((innerItem, index) => (
                    <li className="details__innerListItem" key={index}>
                      <Link to="/" className="details__innerLink">
                        {innerItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                // else if an empty list item is passed AND an image property is supplied
                <>
                  {image && (
                    <section className="details__imgContainer">
                      <img src={image} alt="LG" className="details__img" />
                    </section>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Details;
