import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SlideCard from "./SlideCard/SlideCard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import data from "./SlideCard/slideData";
import "./mainSlide.css";
import useSlider from "../useSlider";

function MainSlideShow() {
  const [items, index, setIndex] = useSlider(data);

  // to make slide change every 5s
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, setIndex]);

  return (
    <section className="mainSlide">
      <div className="section-center">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
        </button>
        {/* slide items are rendered below */}
        {items.map((imgItem, imgItemIndex) => {
          // getting the positions of the slides
          let position = "nextSlide";
          if (imgItemIndex === index) {
            position = "activeSlide";
          }
          if (
            imgItemIndex === index - 1 ||
            (index === 0 && imgItemIndex === items.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <SlideCard
              position={position}
              {...imgItem}
              itemIndex={imgItemIndex}
              key={imgItemIndex}
            />
          );
        })}
        {/* end of slide items */}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      {/* slide circle controls  - MOVE IT TO THE BOTTOM */}
      <section className="mainSlide__circleControls">
        {items.map((item, itemIndex) => {
          const circleClass = index === itemIndex ? "lg" : "";
          return (
            <FiberManualRecordIcon
              key={itemIndex}
              className={`mainSlide__circleIcon ${circleClass}`}
              onClick={() => setIndex(itemIndex)}
            />
          );
        })}
      </section>
    </section>
  );
}

export default MainSlideShow;
