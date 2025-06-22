import React from "react";
import "./Footer.scss";
import footerIcon from "@/assets/image/icon/logo.svg";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <a href="/" className="footer__logo">
        <img src={footerIcon} alt="Explore Russia Logo" />
      </a>
      <nav className="footer__nav">
        <a href="#about">О нас</a>
        <a href="#pricing">Цена</a>
        <a href="#company">Компания</a>
        <a href="#blog">Блог</a>
      </nav>
      <div className="footer__meta">
        <div className="footer__socials">
          <a href="#">f</a>
          <a href="#">in</a>
          <a href="#">G</a>
        </div>
        <div className="footer__copyright">
          Copyright © 2019
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 