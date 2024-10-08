import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from './components/footer';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contatos } from './components/Contatos';


function App() {
  return (
    <Router>
      <NavBar />
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
