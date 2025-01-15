import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import FAQ from './components/FAQ/FAQ';
import Registration from './components/Registration/Registration';
import './App.scss';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Map />
      <FAQ />
      <Registration />
    </div>
  );
}

export default App;