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
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import HomeView from "./pages/HomeView.tsx";
import PublicRoute from "./components/PublicRoute.tsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginView />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<HomeView />} />
            </Route>
            <Route index element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
