import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Povrce from './pages/Povrce';
import Voce from './pages/Voce';
import Rinfuz from './pages/Rinfuz';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zamrznuto-voce" element={<Voce />} />
            <Route path="/zamrznuto-povrce" element={<Povrce />} />
            <Route path="/rinfuz" element={<Rinfuz />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
