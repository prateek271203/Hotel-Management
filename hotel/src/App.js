import './App.css';
import Login from './components/login/Login';
import FrontPage from './pages/FrontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hotel from './pages/Hotel';
import Navbar from './components/navbar/Navbar'; 
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import ContactUs from './pages/ContactUs';
import SearchHotels from './pages/SearchHotels';
import SpecialOffers from './pages/SpecialOffers';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/front" element={<FrontPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/hotel" element={<Hotel/> } /> */}
          <Route path="/" element={<Home />} />
          <Route path="/MyBookings" element={<MyBookings />} />
          <Route path="/SearchHotels" element={<SearchHotels />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/SpecialOffers" element={<SpecialOffers />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
