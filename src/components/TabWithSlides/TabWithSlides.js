import React from "react";
import ExcitingNewOffers from "./ItemSlides/ExicitingNewOffers/ExcitingNewOffers";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import Newest from "./ItemSlides/Newest/Newest";
import ItemsTitleTab from "./ItemsTitleTab";

const TabWithSlides = () => {
  return (
    <section className="tabWithSlides">
      <ItemsTitleTab />
      {/* <MostPopular /> */}
      {/* <ExcitingNewOffers /> */}
      <Newest />
    </section>
  );
};

export default TabWithSlides;
