import React, { useReducer, useEffect } from "react";
import TabSlideCard from "../TabSlideCard/TabSlideCard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./generateTabSlide.css";
import useSlider from "../../useSlider";
import {
  tabSlideControls as tabSlideControlsVariant,
  variantProps,
} from "../../variants";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// useReducer to monitor the translation due to clicks on the control arrows

// action types on larger screens
const actionType = {
  forward: "FORWARD",
  backward: "BACKWARD",
  // reset: "RESET",
};

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case actionType.forward:
      return state + 900;

    case actionType.backward:
      return state - 900;

    default:
      return state;
  }
};

const GenerateTabSlideCard = ({ data = [] }) => {
  const [val, dispatch] = useReducer(reducer, initialState);
  const [items, index, setIndex] = useSlider(data);

  const forwardClick = () => {
    // setIndex(1);
    setIndex((index) => index + 1);
    dispatch(actionType.forward);
  };

  const backwardClick = () => {
    // setIndex(8);
    setIndex((index) => index - 1);
    dispatch(actionType.backward);
  };

  console.log("index = ", index);
  console.log("val = ", val);
  const translateItems = (val) => {
    return `translateX(${val}px)`;
  };

  // run the function every time val changes
  useEffect(() => {
    translateItems();
    console.log("translateItems was called");
  }, [val]);
  return (
    <section className="tabSlide">
      <section
        className="tabSlide__Slides"
        style={{ transform: translateItems(val) }}
      >
        <div className="tabSlide__itemsContainer">
          {items.map((item, slideIndex) => {
            let position = "nextSlide";
            if (slideIndex === index) {
              position = "activeSlide";
            }
            if (
              slideIndex === index - 1 ||
              (index === 0 && slideIndex === items.length - 1)
            ) {
              position = "lastSlide";
            }

            return <TabSlideCard key={item.id} {...item} position={position} />;
          })}
        </div>
      </section>

      {/* only shown at widths of 768px 0r HIGHER */}
      <div className="tabSlide__arrowControls">
        <button
          className="tabSlide__btn"
          onClick={backwardClick}
          disabled={val === -900}
        >
          <ArrowBackIosIcon className="tabSlide__arrowIcon" />
        </button>
        <button
          className="tabSlide__btn "
          onClick={forwardClick}
          disabled={val === 900}
        >
          <ArrowForwardIosIcon className="tabSlide__arrowIcon" />
        </button>
      </div>

      {/* SHOWN ONLY ON WIDTHS OF 768px AND LESS */}
      <motion.section
        className="tabSlide__controls"
        variants={tabSlideControlsVariant}
        {...variantProps}
      >
        {items.map((item, itemIndex) => {
          const colorByItem = (currentItemIndex) =>
            index === currentItemIndex ? "lg" : "";
          return (
            <FiberManualRecordIcon
              key={item.id}
              className={`tabSlide__circleControls ${colorByItem(itemIndex)}`}
              onClick={() => setIndex(itemIndex)}
            />
          );
        })}
      </motion.section>
    </section>
  );
};
export default GenerateTabSlideCard;
