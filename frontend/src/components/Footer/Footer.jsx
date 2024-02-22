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
          <a href="https://twitter.com/" target="_blank">
            <img className="socialLogo" src="/twitter.svg" alt="Logo X" />
          </a>
          <a href="https://telegram.com/" target="_blank">
            <img className="socialLogo" src="/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img className="socialLogo" src="/email.svg" alt="Email" />
          </a>
        </ul>
      </div>
      <span className="contact">
        <p>Contacta con nosotros:</p>
        <a href="mailto:puretreats@email.com" >puretreats@email.com</a>
      </span>
    </footer>
  );
};

export default Footer;
