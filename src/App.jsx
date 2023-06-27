// import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PagesLayout from "./PagesLayout";
// import User from "./User";
import Test from "./test.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        {/* <Route path=":userId" element={<User />} /> */}
        <Route index element={<Test />} />
      </Route>
    </Routes>
  );
}
