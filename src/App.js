import React from 'react';
import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer.jsx';

import Carousel from './components/Carousel.jsx';
import NavBar from './components/Navbar.jsx';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Carousel/>
     <Booking/>
     <Offer/>
     <Footer/>
    </div>
  );
}

export default App;
