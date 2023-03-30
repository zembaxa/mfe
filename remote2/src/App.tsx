import { createRoot } from "react-dom/client";
import Card from "./Card";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => (
  <div className="container">
    <div>Name: remote2</div>
    <Card
      text={`Some quick example text to build on the card title and make up the
          bulk of the card's content.`}
    />
  </div>
);

root.render(<App />);
