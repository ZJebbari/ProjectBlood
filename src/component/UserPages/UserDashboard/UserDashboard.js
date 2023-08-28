import React from 'react'
import HeaderUser from '../HeaderUser';
import Dashboard from './Dashboard';
import classes from "./UserDashboard.module.css";
const UserDashboard = () => {
  return (
    <>
    <HeaderUser/>
    <section
      className={`d-flex justify-content-center align-items-center pt-5 ${classes["banner"]}`}
    >
    </section>
      <div className="container">
      <Dashboard />
        </div>

       
        
      

       
    </>

  )
}

export default UserDashboard