import { createRoot } from 'react-dom/client';
import Counter from './Counter';
import "./index.css";

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <Counter />
  </div>
);

root.render(<App />);
