import React from "react";
import NavProductItems from "./NavProductItems";
import "./navProducts.css";
const NavProducts = ({ showItems }) => {
  const navProductsClass = showItems ? "isShown" : "isHidden";
  return (
    <section className={`navProducts ${navProductsClass}`}>
      <NavProductItems />
    </section>
  );
};

export default NavProducts;
