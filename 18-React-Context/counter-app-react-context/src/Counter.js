import React from "react";

import { useCount } from "./CountContext";

const Counter = () => {
  // set dispatch and state count from useCount()
  const { count, increment, decrement } = useCount();

  return (
    <>
      {/* change 0 with count from context */}
      Count: {count}
      <div>
        {/* use dispatch for onClick method */}
        <button
          className="count-button"
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
        <button
          className="count-button"
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
