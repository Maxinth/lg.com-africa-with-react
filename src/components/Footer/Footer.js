import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__itemsContainer">
        <p className="footer__items">privacy policy</p>
        <p className="footer__items">sitemap</p>
        <p className="footer__items">contact us</p>
        <p className="footer__items">terms of use</p>
      </div>
      <p className="footer__copyRight">
        <span>copyright &copy; 2021 LG Electronics</span>
        <span className="footer__copyRightInfo"> +234 902 4282 995</span>
      </p>
    </footer>
  );
};

export default Footer;
