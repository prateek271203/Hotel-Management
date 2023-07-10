import './App.css';
import Login from './components/login/Login';
import FrontPage from './pages/FrontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
// import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import ContactUs from './pages/ContactUs';
import SearchHotels from './pages/SearchHotels';
import SpecialOffers from './pages/SpecialOffers';
import Footer from './components/footer/Footer';
import MumbaiBlog from './components/blogs/MumbaiBlog';
import PuneTravelBlog from './components/blogs/PuneTravelBlog';
import HotelDetailsPage from './pages/HotelDetailsPage';
import List from './pages/list/List';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route exact path="/front" element={<FrontPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/hotels" element={<List/> } />
          <Route path="/" element={<FrontPage />} />
          <Route path="/MyBookings" element={<MyBookings />} />
          <Route path="/SearchHotels" element={<SearchHotels />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/SpecialOffers" element={<SpecialOffers />} />
          <Route exact path="/MumbaiBlog" element={<MumbaiBlog />} />
          <Route exact path="/PuneTravelBlog" element={<PuneTravelBlog />} />
          <Route exact path="/HotelDetailsPage" element={<HotelDetailsPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
