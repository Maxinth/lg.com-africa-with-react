import React, { useEffect } from "react";
import useSlider from "../../useSlider";
import "./tvSlide.css";
import tvData from "./tvSlideData";
import TvCard from "./TvCard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const TvSlide = () => {
  const [items, index, setIndex] = useSlider(tvData);

  //   useEffect to change the index every 5s
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index, setIndex]);

  return (
    <section className="tvSlide">
      <section className="tvSlide__container">
        {items.map((imgItem, imgItemIndex) => {
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
            <TvCard
              {...imgItem}
              key={imgItemIndex}
              position={position}
              index={index}
            />
          );
        })}

        <section className="tvSlide__circle">
          {items.map((item, itemIndex) => {
            const circleClass = index === itemIndex ? "lg" : "";
            return (
              <FiberManualRecordIcon
                key={itemIndex}
                className={`tvSlide__circleIcon ${circleClass}`}
                onClick={() => setIndex(itemIndex)}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default TvSlide;
