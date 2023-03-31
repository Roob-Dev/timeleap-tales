import React from "react";

const Doodles = () => {
  return (
    <>
      <svg
        className="doodle-top-left"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#f4e9d8" />
        <circle cx="50" cy="50" r="30" stroke="#333" strokeWidth="2" />
        <circle cx="30" cy="30" r="5" fill="#333" />
        <circle cx="70" cy="30" r="5" fill="#333" />
        <path
          d="M30 70 Q50 90 70 70"
          stroke="#333"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="doodle-bottom-right"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="75" cy="75" r="75" fill="#f4e9d8" />
        <circle cx="75" cy="75" r="45" stroke="#333" strokeWidth="2" />
        <circle cx="45" cy="45" r="7" fill="#333" />
        <circle cx="105" cy="45" r="7" fill="#333" />
        <path
          d="M45 105 Q75 135 105 105"
          stroke="#333"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </>
  );
};

export default Doodles;
