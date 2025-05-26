import type { FC } from "react";
import "./index.scss";
import "./adaptive.scss";

export interface EventItemProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export const EventItem: FC<EventItemProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="event-item">
      <img className="event-item__img" src={imageUrl} alt={name} />
      <div className="event-item__data">
        <h2 className="event-item__title">{name}</h2>
        <p className="event-item__description">{description}</p>
        <button className="event-item__button">Узнать больше</button>
      </div>
    </div>
  );
};
