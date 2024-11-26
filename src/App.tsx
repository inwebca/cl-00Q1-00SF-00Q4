import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginView from "./pages/LoginView.tsx";
import HomeView from "./pages/HomeView.tsx";
import PublicRoute from "./components/PublicRoute.tsx";
import RoleBasedRoute from "./components/RoleBasedRoute.tsx";
import AdminPanelView from "./pages/admin/AdminPanelView.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import DashboardView from "./pages/user/DashboardView.tsx";
import TaskStatusView from "./pages/admin/TasksStatusView.tsx";

// @ts-ignore
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginView />} />
            </Route>

            <Route element={<RoleBasedRoute allowedRoles={["admin"]} />}>
              <Route path="admin" element={<AdminPanelView />} />
              <Route path="tasks-status" element={<TaskStatusView />} />
            </Route>

            <Route element={<RoleBasedRoute allowedRoles={["user"]} />}>
              <Route path="dashboard" element={<DashboardView />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<HomeView />} />
            </Route>

            <Route index element={<Navigate to="/login" />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
