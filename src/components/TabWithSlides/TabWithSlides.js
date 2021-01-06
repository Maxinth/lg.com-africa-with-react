import React, { useState } from "react";
import ExcitingNewOffers from "./ItemSlides/ExicitingNewOffers/ExcitingNewOffers";
import HighlyRated from "./ItemSlides/HighlyRated/HighlyRated";
import MostPopular from "./ItemSlides/MostPopularSlide/MostPopular";
import Newest from "./ItemSlides/Newest/Newest";
import ItemsTitleTab from "./ItemsTitleTab";

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
  return (
    <section className="tabWithSlides">
      <ItemsTitleTab changeTab={changeTab} />
      {currentTabItem.mostPopular && <MostPopular />}
      {currentTabItem.newOffers && <ExcitingNewOffers />}
      {currentTabItem.newest && <Newest />}
      {currentTabItem.highlyRated && <HighlyRated />}
    </section>
  );
};

export default TabWithSlides;
