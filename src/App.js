import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import HomePage from "./component/HomePage/HomePage";
import UserHomePage from "./component/UserPages/UserHomePage";
import AdminHomePage from "./component/AdminPages/AdminHomePage";
import Profile from "./component/UserPages/UserDashboard/Profile";
import DonationHistory from "./component/UserPages/UserDashboard/Profile";
import EditProfile from "./component/UserPages/UserDashboard/EditProfile";
import AddTransaction from "./component/AdminPages/AdminDashboard/AddTransaction";
import StockView from "./component/AdminPages/AdminDashboard/StockView";
import AppointmentList from "./component/AdminPages/AdminDashboard/AppointmentList";
import EditStock from "./component/AdminPages/AdminDashboard/EditStock";
import { NotFoundPage } from "./component/not-found/NotFoundPage";
import { UnauthorizedPage } from "./component/unauthorized/unauthorized";
import { AuthGuard } from "./guards/AuthGuard";
import { Role } from "./models/Role";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route
          path="/UserHomePage"
          element={
            <AuthGuard roles={[Role.USER]}>
              <UserHomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard roles={[Role.USER]}>
              <UserHomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard roles={[Role.USER]}>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="/history"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <DonationHistory />
            </AuthGuard>
          }
        />
        <Route
          path="/edit"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <EditProfile />
            </AuthGuard>
          }
        />
        <Route
          path="/AdminHomePage"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AdminHomePage />
            </AuthGuard>
          }
        />
        <Route
          path="/addTransaction"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AddTransaction />
            </AuthGuard>
          }
        />
        <Route
          path="/stockView"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <StockView />
            </AuthGuard>
          }
        />
        <Route
          path="/editStock"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <EditStock />
            </AuthGuard>
          }
        />
        <Route
          path="/appointmentList"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AppointmentList />
            </AuthGuard>
          }
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
