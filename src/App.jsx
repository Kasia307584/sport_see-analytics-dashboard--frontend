// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./PagesLayout";
import Dashboard from "./Dashboard";
// import User from "./User";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path=":userId" element={<User />} /> */}
        <Route path="user/:userId" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
