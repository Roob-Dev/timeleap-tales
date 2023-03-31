import React, { useState } from "react";
import useHistoricalEvents from "./useHistoricalEvents";

const YearEventsPage = () => {
  const [year, setYear] = useState("");
  const [submitted, setSubmitted] = useState(false); // Add this state variable
  const { events, loading, error } = useHistoricalEvents(year);

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true when the form is submitted
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="year-form">
          <label className="form-label">
            Enter a year:
            <input
              type="text"
              value={year}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </form>
      </div>

      {submitted && loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{`${event.month}/${event.day}/${event.year}`}</h3>
            <p>{event.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearEventsPage;
