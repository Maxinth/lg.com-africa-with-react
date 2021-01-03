import React from "react";

import "./slideCard.css";

const SlideCard = ({
  position,
  img,
  topHeaderHeading,
  topHeaderText,
  topBtnText,
  bottomHeaderHeading,
  bottomBtnText,
  itemIndex,
}) => {
  const textColor =
    itemIndex > 4 || itemIndex === 0 ? "text-white" : "text-dark";
  return (
    <section className={`slideCard ${position}`}>
      <div className="slideCard__container">
        <img src={img} alt="life's good" className="slideCard__img" />
        <section className={`slideCard__content ${textColor}`}>
          <section className="slideCard__topContent">
            {topHeaderHeading && (
              <h3 className="slideCard__Header">{topHeaderHeading}</h3>
            )}
            {topHeaderText && (
              <p className="slideCard__Text">{topHeaderText}</p>
            )}

            {topBtnText && (
              <button type="button" className="slideCard__button">
                {topBtnText}
              </button>
            )}
          </section>
          <section className="slideCard__bottomContent">
            {bottomHeaderHeading && (
              <h3 className="slideCard__Header">{bottomHeaderHeading}</h3>
            )}
            {bottomBtnText && (
              <button type="button" className="slideCard__button">
                {bottomBtnText}
              </button>
            )}
          </section>
        </section>
      </div>
    </section>
  );
};

export default SlideCard;
