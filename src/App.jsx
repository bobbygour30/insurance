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
import BusinessInsurance from './pages/BusinessInsurance';
import MarineInsurance from './pages/MarineInsurance';
import BharatSookshmaInsurance from './pages/BharatSookshmaInsurance';
import BurglaryInsurance from './pages/BurglaryInsurance';
import EmployeeCompensationInsurance from './pages/EmployeeCompensationInsurance';
import GroupMediclaimInsurance from './pages/GroupMediclaimInsurance';
import MBDInsurance from './pages/MBDInsurance';
import AllRiskInsurance from './pages/AllRiskInsurance';
import BharatGrihaRakshaInsurance from './pages/BharatGrihaRakshaInsurance';
import ShopInsurance from './pages/ShopInsurance';




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
            <Route path="/insurance/business" element={<BusinessInsurance />} />
            <Route path="/insurance/business/marine" element={<MarineInsurance />} />
            <Route path="/insurance/business/bharat-sookshma" element={<BharatSookshmaInsurance />} />
            <Route path="/insurance/business/burglary" element={<BurglaryInsurance />} />
            <Route path="/insurance/business/employee-compensation" element={<EmployeeCompensationInsurance />} />
            <Route path="/insurance/business/group-mediclaim" element={<GroupMediclaimInsurance />} />
            <Route path="/insurance/business/mbd" element={<MBDInsurance />} />
            <Route path="/insurance/business/all-risk" element={<AllRiskInsurance />} />
            <Route path="/insurance/business/bharat-griha-raksha" element={<BharatGrihaRakshaInsurance />} />
            <Route path="/insurance/business/shop" element={<ShopInsurance />} />
            


          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;