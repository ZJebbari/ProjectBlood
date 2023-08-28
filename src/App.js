import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import HomePage from "./component/HomePage/HomePage";
import UserHomePage from "./component/UserPages/UserHomePage";
import Dashboard from "./component/UserPages/UserDashboard/UserDashboard";
import Profile from "./component/UserPages/UserDashboard/Profile";
import DonationHistory from "./component/UserPages/UserDashboard/Profile";
import EditProfile from "./component/UserPages/UserDashboard/EditProfile";
function App() {
  return (
    <Router>
      <Routes> {/* Use the Routes component */}
        <Route path="/" element={<HomePage />} /> {/* Use the "element" prop instead of "component" */}
        <Route path="/UserHomePage" element={<UserHomePage />} /> {/* Use the "element" prop instead of "component" */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />}  />
        <Route path="/history"  element={<DonationHistory />} />
        <Route path="/edit"  element={<EditProfile />}   />
      </Routes>
    </Router>
  );
}

export default App;
