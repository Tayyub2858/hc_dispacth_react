
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactInfo from './Components/Contact_info/ContactInfo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing_page from './Pages/Landing_Page/Landing_page';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import CpmCalculator from './Pages/CPM_Calculator/CpmCalculator';
import CarrierSetup from './Pages/Carrier_Setup/CarrierSetup';
import Contact from './Pages/Contact_us/Contact';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing_page/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/carriersetup' element={<CarrierSetup/>}/>
          <Route path='/cpm_calculater' element={<CpmCalculator/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
