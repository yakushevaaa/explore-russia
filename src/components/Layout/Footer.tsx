import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} Explore Russia. Все права защищены.</div>
    <div className="footer__links">
      <a href="#privacy">Политика конфиденциальности</a>
      <a href="#terms">Условия</a>
    </div>
  </footer>
);

export default Footer; 