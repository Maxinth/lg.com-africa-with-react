import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
const NavProductItems = () => {
  const { ItemInView, productsItemsInView } = useGlobalContext();
  // state to track the current item being hovered and add a border to highlight as active
  // imitating what activeClassName does when location.pathname is changed
  const [currentLink, setCurrentLink] = useState("");

  // function to set products to true and render the respective list for the current item
  const ItemToShow = (id) => {
    productsItemsInView(); // ensure products are set to true with the return effect being support === false
    ItemInView(id);
    setCurrentLink(id);
  };

  const showBorder = (id) => (currentLink === id ? "isActive" : "");

  return (
    <section className="navbar__productItems">
      <NavLink
        to="/"
        className="navbar__Links"
        activeClassName={showBorder("tv")}
        onMouseEnter={() => ItemToShow("tv")}
      >
        <span className="navbar__Item">TV & HOME ENTERTAINMENT </span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        activeClassName={showBorder("homeAppliances")}
        onMouseEnter={() => ItemToShow("homeAppliances")}
      >
        <span className="navbar__Item">HOME APPLIANCES</span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        activeClassName={showBorder("ac")}
        onMouseEnter={() => ItemToShow("ac")}
      >
        <span className="navbar__Item">AIR CONDITIONERS </span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        activeClassName={showBorder("computer")}
        onMouseEnter={() => ItemToShow("computer")}
      >
        <span className="navbar__Item">COMPUTER PRODUCTS </span>
      </NavLink>
    </section>
  );
};

export default NavProductItems;
