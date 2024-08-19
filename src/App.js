import './App.css';
import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Products from './components/Products';
import Footer from './components/Footer';
import Assist from './components/assist/assist';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Ecosystem />
      <Products />
      <Assist />
      <Footer />
    </div>
  );
}

export default App;
