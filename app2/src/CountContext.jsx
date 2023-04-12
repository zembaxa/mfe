import { createContext, useState } from "react";
import random from "random-number";

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const setRandom = () => {
    setCount(random({min: 0, max: 100, integer: true}));
  }

  return (
    <>
      <CountContext.Provider value={{ count, setCount: setRandom }}>
        {children}
      </CountContext.Provider>
    </>
  );
}
