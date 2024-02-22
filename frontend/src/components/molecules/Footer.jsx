import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="corporative-footer">
        <img src="/logopt.svg" alt="" className="footer-logo" />
        <p className="copyright">@ 2024 Pure Treats. All rigths reserved.</p>
      </div>
      <div>
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
      </div>
      <p className="contact">Contacta con nosotros: puretreats@email.com</p>
    </footer>
  );
};

export default Footer;
