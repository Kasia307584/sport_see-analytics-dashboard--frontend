import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { getMainData } from "./getDataMock";
import { getUserActivity } from "./getDataMock";
import { getAverageSessions } from "./getDataMock";
import { getPerformance } from "./getDataMock";

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
