import React from "react";
import mostPopularItems from "./data";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import { motion } from "framer-motion";
import { tabSlideVariant, variantProps } from "../../../variants";

const MostPopular = () => {
  return (
    <motion.section
      className="mostPopularItems"
      variants={tabSlideVariant}
      {...variantProps}
    >
      <section className="container">
        <GenerateTabSlideCard data={mostPopularItems} />
      </section>
    </motion.section>
  );
};

export default MostPopular;
