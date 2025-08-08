import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import PersonalInsurance from './pages/PersonalInsurance';
import HealthInsurance from './pages/HealthInsurance';
import CarInsurance from './pages/CarInsurance';
import TwoWheelersInsurance from './pages/TwoWheelersInsurance';
import CommercialVehicleInsurance from './pages/CommercialVehicleInsurance';
import MobileInsurance from './pages/MobileInsurance';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/insurance/personal" element={<PersonalInsurance />}/>
            <Route path="//insurance/personal/health" element={<HealthInsurance />} />
            <Route path="/insurance/personal/car" element={<CarInsurance />} />
            <Route path="/insurance/personal/two-wheelers" element={<TwoWheelersInsurance />} />
            <Route path="/insurance/personal/commercial-vehicle" element={<CommercialVehicleInsurance />} />
            <Route path="/insurance/personal/mobile" element={<MobileInsurance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;