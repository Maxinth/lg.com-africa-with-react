import React from "react";
import StarIcon from "@material-ui/icons/Star";
import CompareIcon from "@material-ui/icons/Compare";
import "./tabSlideCard.css";

const starArray = [1, 2, 3, 4, 5];
const TabSlideCard = ({
  imageSrc,
  description,
  rating,
  quantity,
  alt,
  position,
}) => {
  return (
    <article className={`tabSlideCard ${position}`}>
      <section className="tabSlideCard__container">
        <img src={imageSrc} alt={`LG ${alt}`} className="tabSlideCard__img" />
        <p className="tabSlideCard__description">{description}</p>

        <div className="tabSlideCard__starContainer">
          <span className="tabSlideCard__stars">
            {starArray.map((item, index) => {
              const starsWithColor = (itemIndex) => {
                return rating > itemIndex ? "lg" : "";
              };
              return (
                <StarIcon
                  key={item}
                  className={`tabSlideCard__star ${starsWithColor(index)}`}
                />
              );
            })}
          </span>
          <span className="tabSlideCard__itemQuantity">({quantity})</span>
        </div>

        <section className="tabSlideCard__buyCompare">
          <button className="tabSlideCard__btn" type="button">
            where to buy
          </button>
          <div className="tabSlideCard__compare">
            <CompareIcon className="tabSlideCard__compareIcon" />
            COMPARE
          </div>
        </section>
      </section>
    </article>
  );
};

export default TabSlideCard;
