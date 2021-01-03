import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import lgCardImg from "../../assets/lgCard.webp";
import "./lgCardItem.css";

const LgCardItem = ({ image, title }) => {
  return (
    <article className="lgCardItem">
      <img src={image} alt="lg card img" className="lgCardItem__img" />
      <div className="lgCardItem__more">
        <h3 className="lgCardItem__title">{title}</h3>
        <h4 className="lgCardItem__learnMore">
          <span className="lgCardItem__text">learn more </span>
          <ArrowForwardIosIcon className="lgCardItem__icon" />
        </h4>
      </div>
    </article>
  );
};

export default LgCardItem;
