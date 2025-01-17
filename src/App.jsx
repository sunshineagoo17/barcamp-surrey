import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import FAQ from './components/FAQ/FAQ';
import Registration from './components/Registration/Registration';
import Organisers from './components/Organisers/Organisers';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound'; 

import './styles/global.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loader will disappear after 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Map />
                    <FAQ />
                    <Registration />
                    <Organisers />
                    <Sponsors />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;