import React from "react";
import "./Header.scss";
import searchIcon from "@/assets/image/icon/search.svg";
import menuIcon from "@/assets/image/icon/menu.svg";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__container">
      <a href="/" className="header__logo">
        EXPLORE<br />RUSSIA
      </a>
      <nav className="header__nav">
        <a href="#tours">ЭКСКУРСИИ</a>
        <a href="#secrets">НАШИ СЕКРЕТЫ</a>
        <a href="#manual">ИНСТРУКЦИЯ</a>
      </nav>
      <div className="header__actions">
        <button className="header__action-btn">
          <img src={searchIcon} alt="Search" />
        </button>
        <button className="header__action-btn">
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>
    </div>
  </header>
);

export default Header; 