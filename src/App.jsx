// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./PagesLayout";
import User from "./User";
// import Activity from "./Activity";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user/:userId" element={<User />} />
        {/* <Route path="user/:userId/activity" element={<Activity />} /> */}
      </Route>
    </Routes>
  );
}
