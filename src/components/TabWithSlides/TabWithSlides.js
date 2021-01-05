import React from "react";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import ItemsTitleTab from "./ItemsTitleTab";

const TabWithSlides = () => {
  return (
    <section className="tabWithSlides">
      <ItemsTitleTab />
      <MostPopular />
    </section>
  );
};

export default TabWithSlides;
