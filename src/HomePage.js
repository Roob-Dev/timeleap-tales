import React, { useState, useEffect } from "react";


const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://history.muffinlabs.com/date")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data.Events);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const getRandomFact = () => {
    if (facts.length > 0) {
      const randomIndex = Math.floor(Math.random() * facts.length);
      const selectedFact = facts[randomIndex];
      setFact({
        text: `${selectedFact.year} - ${selectedFact.text}`,
        url: selectedFact.links[0].link,
      });
    }
  };
  return (
    <div className="App">
      <h1>Random Historical Fact</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={getRandomFact}>Get a fact!</button>
          {fact && (
            <>
              <p>{fact.text}</p>
              <p>
                <a href={fact.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
