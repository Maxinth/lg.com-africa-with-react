import React, { useState, useReducer, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./itemsTitleTab.css";

// let slideValue = 0;

const ItemsTitleTab = ({ changeTab }) => {
  // useReducer to monitor the translation due to clicks on the control arrows

  // action types
  const actionType = {
    forward: "FORWARD",
    backward: "BACKWARD",
    // reset: "RESET",
  };

  const initialState = 25;
  const reducer = (state, action) => {
    switch (action) {
      case actionType.forward:
        return state + 20;

      case actionType.backward:
        return state - 20;
      // case actionType.reset:
      //   return 0;
      default:
        return state;
    }
  };

  const [val, dispatch] = useReducer(reducer, initialState);

  // state to monitor the number of clicks - and disable the arrows based on the respective specified value
  const [clickCount, setClickCount] = useState(0);

  // increase count and slide tab forward
  const forwardClick = () => {
    setClickCount((clickCount) => clickCount + 1);
    dispatch(actionType.forward); // slide tab by specified value
  };

  // decrease count and slide tab backward
  const backwardClick = () => {
    setClickCount((clickCount) => clickCount - 1);
    dispatch(actionType.backward); // slide tab by specified value
  };

  // function to translate the tab based on the value.
  const translateItems = (value) => {
    return `translateX(${value}%)`;
  };

  // run the function every time val changes
  useEffect(() => {
    translateItems();
  }, [val]);

  // state to track which item was clicked
  const [itemClicked, setItemClicked] = useState("mostPopular");
  const handleClick = (tab) => {
    setItemClicked(tab); // tracking item based on className
    changeTab(tab); // tracking / changing state of tabItems
  };
  const colorByClick = (id) => (itemClicked === id ? "lg" : "");

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
          <span
            className={`itemsTab__item ${colorByClick("mostPopular")}`}
            onClick={() => handleClick("mostPopular")}
          >
            <span className="mod">most</span>
            popular
          </span>
          <span
            className={`itemsTab__item ${colorByClick("newOffers")}`}
            onClick={() => handleClick("newOffers")}
          >
            exciting new offers for you
          </span>
          <span
            className={`itemsTab__item ${colorByClick("newest")}`}
            onClick={() => handleClick("newest")}
          >
            newest
          </span>
          <span
            className={`itemsTab__item ${colorByClick("highlyRated")}`}
            onClick={() => handleClick("highlyRated")}
          >
            highly rated
          </span>
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
