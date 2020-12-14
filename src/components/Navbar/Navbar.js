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

const Navbar = () => {
  const { bar, toggleBar, toggleSearch } = useGlobalContext();
  const mobileSearchClass = bar ? "shown" : "hidden";
  // state for searchBox on desktop
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearchView = () => setShowSearch(!showSearch);
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
                className={`navbar__searchIcon ${mobileSearchClass}`}
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
            <section className="navbar__topLinks">
              <NavLink to="/">LG ThinQ</NavLink>
              <NavLink to="/" className="align-end">
                For Business
              </NavLink>
            </section>
            <section className="navbar__bottomLinks">
              <div className="navbar__bottomLeft">
                <section className="navbar__productItems">
                  <NavLink to="/" className="navbar__Links">
                    <span className="navbar__Item">
                      TV & HOME ENTERTAINMENT{" "}
                    </span>
                  </NavLink>

                  <NavLink to="/" className="navbar__Links">
                    <span className="navbar__Item">HOME APPLIANCES</span>
                  </NavLink>

                  <NavLink to="/" className="navbar__Links">
                    <span className="navbar__Item">AIR CONDITIONERS </span>
                  </NavLink>

                  <NavLink to="/" className="navbar__Links">
                    <span className="navbar__Item">COMPUTER PRODUCTS </span>
                  </NavLink>
                </section>
                <div className="navbar__productAndSupport">
                  <NavLink to="/" className="navbar__Links navbar__productLink">
                    <span className="navbar__Item">Products</span>
                  </NavLink>

                  <NavLink to="/" className="navbar__Links navbar__supportLink">
                    <span className="navbar__Item">Support Home</span>
                  </NavLink>
                </div>
              </div>
              <div className="navbar__bottomRight">
                {!showSearch ? (
                  <>
                    <PersonOutlineOutlinedIcon />
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
    </>
  );
};

export default Navbar;
