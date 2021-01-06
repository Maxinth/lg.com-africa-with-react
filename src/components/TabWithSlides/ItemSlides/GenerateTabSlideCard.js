import React from "react";
import TabSlideCard from "../TabSlideCard/TabSlideCard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./generateTabSlide.css";
import useSlider from "../../useSlider";
import {
  tabSlideControls as tabSlideControlsVariant,
  variantProps,
} from "../../variants";
import { motion } from "framer-motion";

const GenerateTabSlideCard = ({ data = [] }) => {
  const [items, index, setIndex] = useSlider(data);
  return (
    <section className="tabSlide">
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
