import React from "react";
import "./mobileSearch.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useGlobalContext } from "../Context";
const MobileSearchBox = ({ toggleView }) => {
  const { isSearchInView, closeSearchBox } = useGlobalContext();
  // class on mobile based on opacity
  const searchClass = isSearchInView ? "shown" : "hidden";

  // class on desktop based on state ONLY
  // empty string to clear the opacity -controlling classes when toggleView is passed in as a prop
  // when component is reused on desktop screens
  const combinedClass = toggleView ? "" : searchClass;
  const combinedClickHandler = () =>
    toggleView ? toggleView() : closeSearchBox();

  return (
    <section className={`mobileSearch ${combinedClass}`}>
      <form className="mobileSearch__form">
        <div>
          <ArrowBackOutlinedIcon
            className="mobileSearch__icon"
            onClick={() => combinedClickHandler()}
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

/* 
  ========= toggleView ==============
  toggleView changes the view on desktop based on state  while closeSearchBox does same on
  To reuse this component - when ever toggleView is passed 
  in as a prop the view is state controlled , the state of a search Icon on desktop -- see navbar.js for this case - state defined in navbar
  
  otherwise opacity as defined in the classNames in searchClass does the toggle.
  mobile based on opacity + state of another searchIcon defined on mobile - see the MobileDropDown.js for this.- state of 


  ======= combinedClickHandler =======
  The  combinedClickHandler function controls which gets invoked based on the presence of the toggleView prop
  when the element is used.mobileSearch


  ===========combinedClass==========
  combinedClass clears the 'shown' and 'hidden' classes from the element on which it is applied 
  when toggleView is passed in as a prop - so the opacity no longer controls the view
  
  */
