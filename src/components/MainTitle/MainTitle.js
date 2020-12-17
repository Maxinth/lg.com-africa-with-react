import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./mainTitle.css";
import { Link } from "react-router-dom";

const MainTitle = () => {
  return (
    <section className="mainTitle">
      <h2 className="mainTitle__heading">
        LG ELECTRONICS’ RESPONSE TO CORONAVIRUS (COVID-19)
      </h2>
      <p className="mainTitle__learnMore">
        <Link to="/">
          <span className="mainTitle__text"> Learn more </span>{" "}
          <ArrowForwardIosIcon className="mainTitle__icon" />
        </Link>
      </p>
    </section>
  );
};

export default MainTitle;
