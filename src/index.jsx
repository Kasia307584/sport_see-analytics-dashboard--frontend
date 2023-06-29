import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { getMainDataMock } from "./getDataMock";
import { getUserActivityMock } from "./getDataMock";
import { getAverageSessionsMock } from "./getDataMock";
import { getPerformanceMock } from "./getDataMock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

getMainDataMock();
getUserActivityMock();
getAverageSessionsMock();
getPerformanceMock();
