import React from "react";
import "./clickSlide.css";
import ClickSlideCard from "./ClickSlideCard";
import data from "./clickSlideData";
import useSlider from "../../useSlider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ClickSlide = () => {
  const [items, index, setIndex] = useSlider(data);
  // const controlIconDisabled = index === 0 || index ===
  return (
    <section className="clickSlide">
      <div className="clickSlide__Container">
        <>
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
            return (
              <ClickSlideCard key={slideIndex} {...item} position={position} />
            );
          })}
        </>
        <div className="clickSlide__controls">
          <button
            className="clickSlide__btn"
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
          >
            <ArrowBackIosIcon
              className={`clickSlide__icon ${index === 0 ? "disabled" : ""}`}
            />
          </button>
          <button
            className="clickSlide__btn"
            onClick={() => setIndex(index + 1)}
            disabled={index === 2}
          >
            <ArrowForwardIosIcon
              className={`clickSlide__icon ${index === 2 ? "disabled" : ""}`}
            />
          </button>
        </div>
        {/* <div className="clickSlide__controls">
          {items.map((item, itemIndex) => {
            const circleClass = index === itemIndex ? "lg" : "";

            return (
              <FiberManualRecordIcon
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`clickSide__controlsIcon ${circleClass}`}
              />
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default ClickSlide;
