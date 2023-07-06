// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardView";
import Layout from "./pages/PagesLayout";
import ErrorView from "./pages/ErrorView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user/:userId" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
}
