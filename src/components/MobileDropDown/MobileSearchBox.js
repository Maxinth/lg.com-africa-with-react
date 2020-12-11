import React from "react";
import "./mobileSearch.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useGlobalContext } from "../Context";
const MobileSearchBox = () => {
  const { isSearchInView, closeSearchBox } = useGlobalContext();
  const searchClass = isSearchInView ? "shown" : "hidden";

  return (
    <section className={`mobileSearch ${searchClass}`}>
      <form className="mobileSearch__form">
        <div>
          <ArrowBackOutlinedIcon
            className="mobileSearch__icon"
            onClick={closeSearchBox}
          />
          <input type="text" className="mobileSearch__input" />
        </div>
        <button type="submit" className="mobileSearch__btn">
          Search
        </button>
      </form>
      {/* )} */}
    </section>
  );
};

export default MobileSearchBox;
