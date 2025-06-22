import React from "react";
import "./Header.scss";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__logo">Explore Russia</div>
    <nav className="header__nav">
      <a href="#about">О проекте</a>
      <a href="#events">События</a>
      <a href="#contacts">Контакты</a>
    </nav>
  </header>
);

export default Header; 