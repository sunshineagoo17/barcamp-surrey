import React, { useState, useEffect } from 'react';
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
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Map />
          <FAQ />
          <Registration />
          <Organisers />
          <Sponsors />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;