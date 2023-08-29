import React from 'react';
import HeaderUser from '../HeaderUser';
import Dashboard from './Dashboard';
import Footer from '../../Container/Footer/Footer';
import classes from './UserDashboard.module.css';

const UserDashboard = () => {
  return (
    <>
      <HeaderUser />
      <section className={`d-flex justify-content-center align-items-center pt-5 ${classes['banner']}`}>
      </section>
      <Dashboard />
      <Footer />
    </>
  );
};

export default UserDashboard;
