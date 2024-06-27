import { useEffect, useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=tOs157YEu5aDh5TjjoMvArjHh1KChoiS&countryCode=MX"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchEvents();
  }, []);

  console.log(data);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
