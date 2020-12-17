import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SlideCard from "./SlideCard/SlideCard";
import data from "./SlideCard/slideData";
import "./mainSlide.css";

function MainSlideShow() {
  const [items] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      console.log("slide after 5s");
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
    </section>
  );
}

export default MainSlideShow;
