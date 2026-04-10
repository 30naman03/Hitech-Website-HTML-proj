import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import ContactPage from '@/pages/ContactPage';
import AutomaticPaverBlocks from '@/pages/products/AutomaticPaverBlocks';
import RCCPipes from '@/pages/products/RCCPipes';
import RubbermoldPaverBlocks from '@/pages/products/RubbermoldPaverBlocks';
import KerbStones from '@/pages/products/KerbStones';
import SaucerDrainCovers from '@/pages/products/SaucerDrainCovers';
import ManholeCovers from '@/pages/products/ManholeCovers';
import PrecastBoundaryWalls from '@/pages/products/PrecastBoundaryWalls';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/automatic-paver-blocks" element={<AutomaticPaverBlocks />} />
          <Route path="/products/rcc-pipes" element={<RCCPipes />} />
          <Route path="/products/rubbermold-paver-blocks" element={<RubbermoldPaverBlocks />} />
          <Route path="/products/kerb-stones" element={<KerbStones />} />
          <Route path="/products/saucer-drain-covers" element={<SaucerDrainCovers />} />
          <Route path="/products/manhole-covers" element={<ManholeCovers />} />
          <Route path="/products/precast-boundary-walls" element={<PrecastBoundaryWalls />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;