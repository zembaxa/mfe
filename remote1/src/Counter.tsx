import { FC, useState } from "react";
import Button from "@mui/material/Button";
import "./counter.scss";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);
  const onClick = (modifier) => () => {
    setCounter((counter) => counter + modifier);
  };

  return (
    <div className="counter">
      <Button
        variant="contained"
        onClick={onClick(-1)}
        sx={{ background: "orange", fontSize: 25 }}
      >
        -
      </Button>
      <span>{counter}</span>
      <Button
        variant="contained"
        sx={{ background: "green", fontSize: 25 }}
        onClick={onClick(1)}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
