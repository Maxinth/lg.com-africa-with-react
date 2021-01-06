import React from "react";
import ExcitingNewOffers from "./ItemSlides/ExicitingNewOffers/ExcitingNewOffers";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import ItemsTitleTab from "./ItemsTitleTab";

const TabWithSlides = () => {
  return (
    <section className="tabWithSlides">
      <ItemsTitleTab />
      {/* <MostPopular /> */}
      <ExcitingNewOffers />
    </section>
  );
};

export default TabWithSlides;
