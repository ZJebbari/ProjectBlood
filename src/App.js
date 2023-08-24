import "./App.css";
import Banner from "./component/Container/Banner";
import DonInfos from "./component/Container/DonInfos";
import Footer from "./component/Container/Footer/Footer";
import FormRendezVous from "./component/Container/Forms/FormRendezVous";
import Header from "./component/Header/Header";
import SignUp from "./component/Container/Forms/SignUp";
// import Form from './component/Container/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <DonInfos />
      <FormRendezVous />
      <Footer />
    </div>
  );
}

export default App;
