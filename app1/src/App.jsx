import { useContext } from "react";
import "./App.css";
import App2 from "app2/App";
import { CountContext } from "app2/CountContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Application 1</Card.Title>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Card.Body>
      </Card>
      <hr />
      <App2 />
    </>
  );
}

export default App;
