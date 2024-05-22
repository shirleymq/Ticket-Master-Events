import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";
import { useState } from "react";

//const events = data._embedded.events;

const Events = () => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}
    />
  ));
  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;
