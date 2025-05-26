import axios from "axios";
import { useEffect, useState } from "react";
import { EventItem, type EventItemProps } from "./EventItem/index";
import "./index.scss";
import "./adaptive.scss";

export const EventSection = () => {
  const [events, setEvents] = useState<EventItemProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://localhost:7194/events");
        const firstTwoEvents = response.data.slice(0, 2);
        setEvents(firstTwoEvents);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <section className="events">
        <ul className="events__list">
          {events.map((item) => (
            <li key={item.id}>
              <EventItem {...item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
