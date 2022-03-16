import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FiltersContextProvider } from "./contexts/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
