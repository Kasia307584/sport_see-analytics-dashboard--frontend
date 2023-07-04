import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { getMainData } from "./services/getDataMock";
import { getUserActivity } from "./services/getDataMock";
import { getAverageSessions } from "./services/getDataMock";
import { getPerformance } from "./services/getDataMock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

getMainData();
getUserActivity();
getAverageSessions();
getPerformance();
