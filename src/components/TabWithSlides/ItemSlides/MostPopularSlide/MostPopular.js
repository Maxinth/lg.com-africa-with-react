import React from "react";
import mostPopularItems from "./data";
import GenerateTabSlideCard from "../GenerateTabSlideCard";

const MostPopular = () => {
  return (
    <section className="mostPopularItems">
      <section className="mostPopularItems__container">
        <GenerateTabSlideCard data={mostPopularItems} />
      </section>
    </section>
  );
};

export default MostPopular;
