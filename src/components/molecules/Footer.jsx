import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src="/logopt.svg" alt="" className="footer-logo" />
      </div>
    <div className="social-and-legal">
      <ul className="social-icons">
        <a href="https://factoriaf5.org/" target="_blank">
          <img src="/twitter.svg" alt="Logo X" />
        </a>

        <a href="https://factoriaf5.org/" target="_blank">
          <img src="/instagram.svg" alt="Instagram" />
        </a>

        <a href="https://factoriaf5.org/">
          <img src="/email.svg" alt="Email" />
        </a>
      </ul>
      <p>@ 2024 Pure Treats. All rigths reserved.</p>
      <p>Contacta con nostros: puretreats@email.com</p>
      </div>
    </footer>
  );
};

export default Footer;
