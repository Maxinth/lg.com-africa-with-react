import React from "react";
import LgCardItem from "./LgCardItem";
import "./lgCard.css";
import cardData from "./lgCardsData";
const LgCards = () => {
  return (
    <section className="lgCards">
      {cardData.map((data) => (
        <LgCardItem key={data.id} {...data} />
      ))}
    </section>
  );
};

export default LgCards;
