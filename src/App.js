import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/About/About';
import Menu from './components/Menu/Menu';
import Franchise from './components/Franchise/Franchise';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Menu />
      <Franchise />
      <Contact />
    </div>
  );
};

export default App;