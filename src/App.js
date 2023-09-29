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
function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use the Routes component */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Use the "element" prop instead of "component" */}
        <Route path="/UserHomePage" element={<UserHomePage />} />{" "}
        {/* Use the "element" prop instead of "component" */}
        <Route path="/dashboard" element={<UserHomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<DonationHistory />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/AdminHomePage" element={<AdminHomePage />} />
        <Route path="/addTransaction" element={<AddTransaction />} />
        <Route path="/stockView" element={<StockView />} />
        <Route path="/editStock" element={<EditStock />} />
        <Route path="/appointmentList" element={<AppointmentList />} />
      </Routes>
    </Router>
  );
}

export default App;
