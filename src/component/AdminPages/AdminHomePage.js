import React from 'react'
import HeaderAdmin from'./HeaderAdmin';
import ThreeCards from './ThreeCards';
import Dashboard from './AdminDashboard/Dashboard';
import Footer from '../Container/Footer/Footer';
const AdminHomePage = () => {
  return (
    <>
    <HeaderAdmin/>
    <ThreeCards/>
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default AdminHomePage;