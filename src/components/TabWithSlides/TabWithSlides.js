import React from "react";
import ExcitingNewOffers from "./ItemSlides/ExicitingNewOffers/ExcitingNewOffers";
import HighlyRated from "./ItemSlides/HighlyRated/HighlyRated";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import Newest from "./ItemSlides/Newest/Newest";
import ItemsTitleTab from "./ItemsTitleTab";

const TabWithSlides = () => {
  return (
    <section className="tabWithSlides">
      <ItemsTitleTab />
      {/* <MostPopular /> */}
      {/* <ExcitingNewOffers /> */}
      {/* <Newest /> */}
      <HighlyRated />
    </section>
  );
};

export default TabWithSlides;
