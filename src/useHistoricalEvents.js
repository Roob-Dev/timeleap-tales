import { useState, useEffect } from "react";
import axios from "axios";

const useHistoricalEvents = (year) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/historicalevents?year=${year}`,
          {
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
            },
          }
        );
        const fetchedEvents = response.data;
        setEvents(fetchedEvents);
      } catch (error) {
        setError("Error fetching events");
      }
      setLoading(false);
    };

    if (year) {
      fetchEvents();
    } else {
      setEvents([]); // Reset events when year is empty
    }
  }, [year]);

  return { events, loading, error };
};

export default useHistoricalEvents;
