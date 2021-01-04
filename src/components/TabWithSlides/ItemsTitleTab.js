import React, { useState, useReducer, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./itemsTitleTab.css";

// let slideValue = 0;

const ItemsTitleTab = () => {
  // useReducer

  // slideTabState
  // let slideValue = '';

  // action types
  const actionType = {
    forward: "FORWARD",
    backward: "BACKWARD",
  };

  const initialState = 25;
  const reducer = (state, action) => {
    switch (action) {
      case actionType.forward:
        return state + 20;

      case actionType.backward:
        return state - 20;
      default:
        return state;
    }
  };

  const [val, dispatch] = useReducer(reducer, initialState);
  const [clickCount, setClickCount] = useState(0);
  const forwardClick = () => {
    setClickCount((clickCount) => clickCount + 1);
    // if (clickCount < 3) {
    dispatch(actionType.forward);
    console.log("forward dispatched");
    // }
  };
  const backwardClick = () => {
    setClickCount((clickCount) => clickCount - 1);
    // if (clickCount >= 0) {
    dispatch(actionType.backward);
    console.log("back dispatched");
    // }
  };

  const translateItems = (val) => {
    return `translateX(${val}%)`;
  };

  useEffect(() => {
    translateItems();
  }, [val]);
  // console.log("slideValue = ", slideValue);
  console.log("val = ", val);

  console.log("clickCount = ", clickCount);
  return (
    <section className="itemsTab">
      <div className="itemsTab__container">
        <button
          className="itemsTab__controlsContainer"
          onClick={backwardClick}
          disabled={clickCount === -3}
        >
          <ArrowBackIosIcon className="itemsTab__controls" />
        </button>

        <section
          className="itemsTab__items"
          style={{ transform: translateItems(val) }}
        >
          <span className="itemsTab__item">
            <span className="mod">most</span>
            popular
          </span>
          <span className="itemsTab__item">exciting new offers for you</span>
          <span className="itemsTab__item">newest</span>
          <span className="itemsTab__item">highly rated</span>
        </section>
        <button
          className="itemsTab__controlsContainer"
          onClick={forwardClick}
          disabled={clickCount === 0}
        >
          <ArrowForwardIosIcon className="itemsTab__controls" />
        </button>
      </div>
    </section>
  );
};

export default ItemsTitleTab;
