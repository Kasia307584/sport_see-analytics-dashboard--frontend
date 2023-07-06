import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/DashboardView";
import Layout from "../pages/layout/PagesLayout";
import Error from "../pages/error/ErrorView";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user/:userId" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
