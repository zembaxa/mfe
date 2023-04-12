import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CountContextProvider from "app2/CountContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </React.StrictMode>
);
