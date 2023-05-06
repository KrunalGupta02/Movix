import React from "react";
import "./style.scss";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">🤞 Made by Krunal 🤞</div>
        <div className="socialIcons">
          <span className="icon">
            <Link to="https://github.com/KrunalGupta02">
              <FaGithub />
            </Link>
          </span>
          {/* <span className="icon">
            <Link to="">
              <FaInstagram />
            </Link>
          </span> */}
          <span className="icon">
            <Link to="https://www.linkedin.com/in/krunal-gupta-9bb6a7206/">
              <FaLinkedin />
            </Link>
          </span>
          <span className="icon">
            <Link to="https://twitter.com/KrunalKRG">
              <FaTwitter />
            </Link>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
