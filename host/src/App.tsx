import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => (
  <div className="container">
    <div>Name: host</div>
  </div>
);

root.render(<App />);
