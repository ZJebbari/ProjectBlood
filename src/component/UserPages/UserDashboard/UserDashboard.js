import React from 'react';
import HeaderUser from '../HeaderUser';
import Dashboard from './Dashboard';
import Footer from '../../Container/Footer/Footer';
import classes from './UserDashboard.module.css';
 import FormRendezVous from '../../Container/Forms/FormRendezVous';
const UserDashboard = () => {
  return (
    <>
      <HeaderUser />
      
      <div className={` ${classes.entete}`}>
        <h2><spam>"</spam> Votre don de sang : une goutte d'espoir qui peut guider quelqu'un vers la lumière.
        <spam>"</spam>  </h2>
      </div>
      <Dashboard />
     
      <FormRendezVous/>
      <Footer />
    </>
  );
};

export default UserDashboard;
