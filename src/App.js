import './App.css';
import React from "react";
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem/Ecosystem';
import Products from './components/Products';
import Footer from './components/Footer/Footer';
import Assist from './components/assist/assist';
import Header from './components/Ecosystem/Header/Header';

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
