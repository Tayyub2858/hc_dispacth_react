
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactInfo from './Components/Contact_info/ContactInfo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LandingPage from './Pages/Landing_Page/Landing_page';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import CpmCalculator from './Pages/CPM_Calculator/CpmCalculator';
import CarrierSetup from './Pages/Carrier_Setup/CarrierSetup';
import Contact from './Pages/Contact_us/Contact';
import Admin from './Admin/Admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/carriersetup' element={<CarrierSetup />} />
          <Route path='/cpm_calculater' element={<CpmCalculator />} />
        </Routes>
        <ContactInfo />
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
