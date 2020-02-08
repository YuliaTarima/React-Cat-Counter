import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  
  return (
    <div className="App">
      <div id="main-container" className="container p-3 my-3 border">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
