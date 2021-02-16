import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" aria-label="heart">
        💜
      </span>{" "}
      by
      <a
        href="https://www.linkedin.com/in/miguel-chamorro-fuentes-844a6514a/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span> <span>Miguel Chamorro</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>Chillán</span>, 2021
    </div>
  </footer>
);

export default Footer;
