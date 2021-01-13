import React from "react";
import "./clickSlideCard.css";

const ClickSlideCard = ({ headerText, img, bottomText, position }) => {
  return (
    <article className={`clickSlideCard ${position}`}>
      <h3 className="clickSlideCard__headerText">{headerText}</h3>
      <img src={img} alt={headerText} className="clickSlideCard__img" />
      <p className="clickSlideCard__text">{bottomText}</p>
    </article>
  );
};

export default ClickSlideCard;
