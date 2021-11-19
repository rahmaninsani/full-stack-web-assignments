import React from "react";
import { createContext, useContext, useReducer } from "react";

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      // code here
      return {
        ...state,
        count: action.payload,
      };
    }
    case "decrement": {
      // code here
      return {
        ...state,
        count: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  const initialState = { count: 0 };

  // useReducer
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = () => {
    dispatch({ type: "increment", payload: state.count + 1 });
  };

  const decrement = () => {
    dispatch({ type: "decrement", payload: state.count - 1 });
  };

  const { count } = state;

  // Make variable `value` and assign state & dispatch
  return (
    <CountContext.Provider
      value={{
        count,
        increment,
        decrement,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === "undefined") {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};

export { CountProvider, useCount };
