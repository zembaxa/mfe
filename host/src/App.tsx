import { createRoot } from "react-dom/client";
import Counter from "remote1/Counter";
import Card from "remote2/Card";
import Msg from "msg/Msg";
import useMsg from "msg/useMsg";
import "./index.css";

const App = () => {
  const {text, setText} = useMsg();

  return (
    <div className="container">
      <div>Name: host</div>
      <hr />
      <Counter />
      <hr />
      <Card text="This is host" />
      <hr />
      <div>Remote Msg component</div>
      <Msg />
      <hr />
      <div>Local component with msg hook</div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <br />
      Echo: {text}
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
