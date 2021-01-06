import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import highlyRatedItems from "./data";

const HighlyRated = () => {
  return (
    <section className="highlyRated">
      <section className="highlyRated__container">
        <GenerateTabSlideCard data={highlyRatedItems} />
      </section>
    </section>
  );
};

export default HighlyRated;
