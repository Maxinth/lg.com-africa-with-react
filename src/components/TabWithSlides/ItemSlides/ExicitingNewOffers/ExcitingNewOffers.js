import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import excitingNewOffers from "./data";
import { motion } from "framer-motion";
import { tabSlideVariant, variantProps } from "../../../variants";

const ExcitingNewOffers = () => {
  return (
    <motion.section
      className="newOffers"
      variants={tabSlideVariant}
      {...variantProps}
    >
      <section className="container">
        <GenerateTabSlideCard data={excitingNewOffers} />
      </section>
    </motion.section>
  );
};

export default ExcitingNewOffers;
