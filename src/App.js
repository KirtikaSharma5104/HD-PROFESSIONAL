// src/App.js
import React from 'react';
import './App.css';
import Header from './header';
import MainContent from './maincontent';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
