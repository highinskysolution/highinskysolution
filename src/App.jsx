import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Scroll to top and re-init AOS on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Wait for React to render the new DOM elements, then refresh animations
    setTimeout(() => {
      if (window.AOS) {
        window.AOS.init();
        window.AOS.refresh();
      }
    }, 100);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 850,
        once: true,
        offset: 90,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Preloader />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services.html" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects.html" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
