import React from 'react';
import Header from './components/Header/Header';
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
      <Map />
      <FAQ />
      <Registration />
    </div>
  );
}

export default App;