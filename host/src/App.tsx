import { createRoot } from 'react-dom/client';
import Counter from "remote1/Counter";
import Test from "remote2/Test";
import "./index.css";

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Counter />
    <Test />
  </div>
);

root.render(<App />);
