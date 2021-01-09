import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import highlyRatedItems from "./data";
import { motion } from "framer-motion";
import { tabSlideVariant, variantProps } from "../../../variants";

const HighlyRated = () => {
  return (
    <motion.section
      className="highlyRated"
      variants={tabSlideVariant}
      {...variantProps}
    >
      <section className="container">
        <GenerateTabSlideCard data={highlyRatedItems} />
      </section>
    </motion.section>
  );
};

export default HighlyRated;
