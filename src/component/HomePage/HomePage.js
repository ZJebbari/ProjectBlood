import React from 'react'
import Header from '../Header/Header';
import Banner from '../Container/Banner';
import DonInfos from '../Container/DonInfos';
import FormRendezVous from '../Container/Forms/FormRendezVous';
import Footer from '../Container/Footer/Footer';
const HomePage = () => {
  return (
    <div  >
      <Header />
      <Banner />
      <DonInfos />
      <FormRendezVous />
      <Footer />
    </div>
  )
}

export default HomePage