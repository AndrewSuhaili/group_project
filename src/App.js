import React from 'react';  // Even though it may not be needed with the new JSX transform, it's safe to include.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Module1 from './components/Module1';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module4" element={<Module4 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
