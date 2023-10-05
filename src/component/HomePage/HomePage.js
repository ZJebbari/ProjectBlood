import React from 'react'
import Header from '../Header/Header';
import Banner from '../Container/Banner';
import DonInfos from '../Container/DonInfos';
import FormRendezVous from '../Container/Forms/FormRendezVous';
import Footer from '../Container/Footer/Footer';
import Quizz from '../Container/Quizz';
const HomePage = () => {
  return (
    <div  >
      <Header />
      <Banner />
      <Quizz/>
      <DonInfos />
      <FormRendezVous />
      <Footer />
    </div>
  )
}

export default HomePage