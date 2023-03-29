import { FC, useState } from "react";
import addNumbers from "lib/dist";
import Test from "remote2/Test";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const onClick = (modifier) => () => {
    setCounter((counter) => addNumbers(counter, modifier));
  };

  return (
    <>
      <Test />
      <button type="button" onClick={onClick(-1)}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" onClick={onClick(1)}>
        +
      </button>
    </>
  );
};

export default Counter;
