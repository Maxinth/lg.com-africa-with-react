import React, { useState } from "react";
import ExcitingNewOffers from "./ItemSlides/ExicitingNewOffers/ExcitingNewOffers";
import HighlyRated from "./ItemSlides/HighlyRated/HighlyRated";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import Newest from "./ItemSlides/Newest/Newest";
import ItemsTitleTab from "./ItemsTitleTab";
import "./tabWithSlides.css";
const TabWithSlides = () => {
  const [currentTabItem, setCurrentTabItem] = useState({
    mostPopular: true,
    newOffers: false,
    newest: false,
    highlyRated: false,
  });

  const changeTab = (tab) => {
    setCurrentTabItem({
      mostPopular: false,
      newOffers: false,
      newest: false,
      highlyRated: false,
      [`${tab}`]: true,
    });
  };

  const { mostPopular, newOffers, newest, highlyRated } = currentTabItem;
  const highlyRatedBorderFix = highlyRated ? "highlyRated" : "";
  return (
    <section className={`tabWithSlides ${highlyRatedBorderFix}`}>
      <ItemsTitleTab changeTab={changeTab} />
      {mostPopular && <MostPopular />}
      {newOffers && <ExcitingNewOffers />}
      {newest && <Newest />}
      {highlyRated && <HighlyRated />}
    </section>
  );
};

export default TabWithSlides;
