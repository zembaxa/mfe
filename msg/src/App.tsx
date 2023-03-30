import { createRoot } from "react-dom/client";
import "./index.css";
import TextInput from './Msg';

const App = () => (
  <div className="container">
    <div>Name: msg</div>
    <TextInput />
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);

