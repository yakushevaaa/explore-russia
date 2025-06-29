import React, { ReactNode } from "react";
import "./Card.scss";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export default Card; 