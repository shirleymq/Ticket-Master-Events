import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=tOs157YEu5aDh5TjjoMvArjHh1KChoiS`
        );
        const data = await response.json();
        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };
    fetchEventsData();
  }, []);

  console.log(eventData);
  return <div> Detail</div>;
};
export default Detail;
