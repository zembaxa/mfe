import { useContext } from "react";
import "./App.css";
import App2 from "app2/App";
import { CountContext } from "app2/CountContext";

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div className="App">
        <h1>Application 1</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <App2 />
    </>
  );
}

export default App;
