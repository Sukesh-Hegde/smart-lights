import './App.css';
import React from "react";
import Hero from './components/Hero/Hero';
import Ecosystem from './components/Ecosystem/Ecosystem';
import Products from './components/Product/Products';
import Footer from './components/Footer/Footer';
import Assist from './components/assist/assist';
import NavBar from './components/Header/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Ecosystem />
      <Products />
      <Assist />
      <Footer />
    </div>
  );
}

export default App;
