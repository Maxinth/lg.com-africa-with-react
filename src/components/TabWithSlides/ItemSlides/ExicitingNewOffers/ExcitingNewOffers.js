import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import excitingNewOffers from "./data";
const ExcitingNewOffers = () => {
  return (
    <section className="newOffers">
      <section className="newOffers__container">
        <GenerateTabSlideCard data={excitingNewOffers} />
      </section>
    </section>
  );
};

export default ExcitingNewOffers;
