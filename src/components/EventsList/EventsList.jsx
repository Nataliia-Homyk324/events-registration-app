import EventItem from "../EventItem/EventItem.jsx";

import style from "./EventsList.module.css";

const EventsList = ({ events }) => {
  return (
    <div className={style.eventsList}>
      {events.map((event) => (
        <EventItem
          key={event._id}
          title={event.title}
          description={event.description}
          eventDate={event.eventDate}
          organizer={event.organizer}
        />
      ))}
    </div>
  );
};

export default EventsList;
