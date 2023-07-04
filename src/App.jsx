// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardView";

export default function App() {
  return (
    <Routes>
      <Route path="user/:userId" element={<Dashboard />}></Route>
    </Routes>
  );
}
