import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { NavLink } from "react-router-dom";
import mobileLogo from "../../assets/logo-b2c-m.jpg";
import desktopLogo from "../../assets/logo-b2c.jpg";
import "./navbar.css";
import MobileDropDown from "../MobileDropDown/MobileDropDown";
import { useGlobalContext } from "../Context";
import MobileSearchBox from "../MobileDropDown/MobileSearchBox";
import NavProductItems from "./NavProductItems";
import NavProducts from "./NavProducts";
import NavMoreDetails from "./NavMoreDetails";

const Navbar = () => {
  const {
    bar,
    toggleBar,
    toggleSearch,
    isSearchInView,
    showItems,
    productsItemsInView,
    bothItemsHidden,
    supportInView,
  } = useGlobalContext();
  // respective classNames due to bar or search states before and after a toggle
  const dueToBarState = bar ? "shown" : "hidden";
  const dueToSearchState = isSearchInView ? "" : "inView";
  // state for searchBox on desktop
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearchView = () => setShowSearch(!showSearch);

  // function returning a className to change the visual appearance of the item currently in view
  const colorWhenTrue = (condition) => {
    return condition ? "lg" : "";
  };

  return (
    <>
      <nav>
        {/* shown only on mobile and small screens */}
        <header className="navbar__mobile">
          <div className="navbar__mobileLinks">
            <NavLink to="/" className="navbar__mobileNavLinks">
              For Customer
            </NavLink>
            <NavLink to="/" className="navbar__mobileNavLinks">
              For Business
            </NavLink>
          </div>
          <section className="navbar__mobileNav">
            <div className="navbar__menuAndSearch">
              {bar ? (
                <CloseOutlinedIcon onClick={toggleBar} />
              ) : (
                <MenuIcon onClick={toggleBar} />
              )}
              <SearchRoundedIcon
                onClick={toggleSearch}
                className={`navbar__searchIcon ${dueToBarState} ${dueToSearchState}`}
              />
            </div>
            <img src={mobileLogo} alt="mobile lg" />
            <PersonOutlineOutlinedIcon />
          </section>
        </header>

        {/* shown only on larger screens */}
        <header className="navbar__desktop">
          <img src={desktopLogo} alt="desktop lg" />
          <div>
            {/* hide the both products and support items when mouse hovers into this top section */}
            <section
              className="navbar__topLinks"
              onMouseEnter={bothItemsHidden}
            >
              <NavLink to="/">LG ThinQ</NavLink>
              <NavLink to="/" className="align-end">
                For Business
              </NavLink>
            </section>
            {/* hide the both products and support items when mouse hovers into this top section */}
            <section className="navbar__bottomLinks">
              <div className="navbar__bottomLeft">
                <NavProductItems />

                <div className="navbar__productAndSupport">
                  <NavLink
                    to="/"
                    className="navbar__Links navbar__productLink"
                    onMouseEnter={productsItemsInView}
                    // onMouseLeave={productsItemsHidden}
                  >
                    <span
                      className={`navbar__Item ${colorWhenTrue(
                        showItems.products
                      )}`}
                    >
                      Products
                    </span>
                  </NavLink>

                  <NavLink
                    to="/"
                    className="navbar__Links navbar__supportLink"
                    onMouseEnter={supportInView}
                  >
                    <span
                      className={`navbar__Item ${colorWhenTrue(
                        showItems.support
                      )}`}
                    >
                      Support Home
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="navbar__bottomRight">
                {!showSearch ? (
                  <>
                    <PersonOutlineOutlinedIcon className="navbar__accountIcon" />
                    <SearchRoundedIcon onClick={toggleSearchView} />
                  </>
                ) : (
                  <MobileSearchBox toggleView={toggleSearchView} /> // controlling the view via STATE only - see MobileSearchBox for more info
                )}
              </div>
            </section>
          </div>
        </header>
      </nav>
      <MobileDropDown />

      <NavProducts showItems={showItems.products} />
      <NavMoreDetails />
    </>
  );
};

export default Navbar;
