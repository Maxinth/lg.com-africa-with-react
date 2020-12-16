import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
const NavProductItems = () => {
  const { ItemInView, productsItemsInView } = useGlobalContext();

  // function to set products to true and render the respective list for the current item
  const ItemToShow = (id) => {
    productsItemsInView(); // ensure products are set to true with the return effect being support === false
    ItemInView(id);
  };

  return (
    <section className="navbar__productItems">
      <NavLink
        to="/"
        className="navbar__Links"
        onMouseEnter={() => ItemToShow("tv")}
      >
        <span className="navbar__Item">TV & HOME ENTERTAINMENT </span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        onMouseEnter={() => ItemToShow("homeAppliances")}
      >
        <span className="navbar__Item">HOME APPLIANCES</span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        onMouseEnter={() => ItemToShow("ac")}
      >
        <span className="navbar__Item">AIR CONDITIONERS </span>
      </NavLink>

      <NavLink
        to="/"
        className="navbar__Links"
        onMouseEnter={() => ItemToShow("computer")}
      >
        <span className="navbar__Item">COMPUTER PRODUCTS </span>
      </NavLink>
    </section>
  );
};

export default NavProductItems;
