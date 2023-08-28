 
import React from 'react'

import DonInfos from '../Container/DonInfos';
import FormRendezVous from '../Container/Forms/FormRendezVous';
import Footer from '../Container/Footer/Footer';
import HeaderUser from './HeaderUser';
import UserBanner from './UserBanner';
const UserHomePage = () => {
  return (
    <div  >
      <HeaderUser />
      <UserBanner />
      <DonInfos />
      <FormRendezVous />
      <Footer />
    </div>
  )
}

export default UserHomePage