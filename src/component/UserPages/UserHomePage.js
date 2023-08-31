 
import React , {useState}from 'react'

import DonInfos from '../Container/DonInfos';
import FormRendezVous from '../Container/Forms/FormRendezVous';
import Footer from '../Container/Footer/Footer';
import HeaderUser from './HeaderUser';
import UserBanner from './UserBanner';

import Dashboard from './UserDashboard/Dashboard';
import { Link, useNavigate} from "react-router-dom";
const UserHomePage = ( {props}) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const history=useNavigate();

  const handleDashboardClick = () => {
    history("/dashboard")
    setShowDashboard(true);
  };
  
  const handlehomeClick = () => {
    setShowDashboard(false);
  };
  return (
    <div  >
      <HeaderUser  onClick={handleDashboardClick} home={handlehomeClick}/>
      {!showDashboard ? (
        <>
          <UserBanner />
      <DonInfos />
        </>
      ) : (
        <Dashboard />
      )}
      
      <FormRendezVous />
      <Footer />
    </div>
  )
}

export default UserHomePage