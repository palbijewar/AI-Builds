import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Analytics from './pages/Analytics';
import Engagement from './pages/Engagement';
import Security from './pages/Security';
import Integration from './pages/Integration';
import Automation from './pages/Automation';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/security" element={<Security />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/automation" element={<Automation />} />
        </Routes>
        <Services/>
        <Features />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
