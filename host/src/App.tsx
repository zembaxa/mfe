import { createRoot } from "react-dom/client";
import Counter from "remote1/Counter";
import Card from "remote2/Card";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <hr />
    <Counter />
    <hr />
    <Card text="This is host" />
  </div>
);

root.render(<App />);
