import { useEffect, useRef } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
  const data = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      data.current = eventsJSON;
    }, 4000);
    //Load API call
  }, []);

  console.log(data.current);

  return {
    events: data.current?._embedded?.events || [],
  };
};

export default useEventsData;
