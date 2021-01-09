import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import newestItems from "./data";
import { motion } from "framer-motion";
import { tabSlideVariant, variantProps } from "../../../variants";

const Newest = () => {
  return (
    <motion.section
      className="newest"
      variants={tabSlideVariant}
      {...variantProps}
    >
      <section className="container">
        <GenerateTabSlideCard data={newestItems} />
      </section>
    </motion.section>
  );
};

export default Newest;
