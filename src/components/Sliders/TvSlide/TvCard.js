import React from "react";
import "./tvCard.css";
const TvCard = ({ image, position, topText, bottomText, index }) => {
  const whiteText = index === 1 ? "text-white" : "";
  return (
    <article className={`tvCard ${position}`}>
      <div className="tvCard__container">
        <img src={image} alt="tv card" className="tvCard__img" />
        <div className={`tvCard__textContainer ${whiteText}`}>
          {topText && <p className="tvCard__Text">{topText}</p>}

          {bottomText && <p className="tvCard__Text">{bottomText}</p>}
          <button className="tvCard__btn" type="button">
            find out more
          </button>
        </div>
      </div>
    </article>
  );
};

export default TvCard;
