import { useContext } from "react";
import "./App.css";
import { CountContext } from "./CountContext";
import Button from '@mui/material/Button';

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="App">
      <h1>Application 2</h1>
      <div className="card">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
