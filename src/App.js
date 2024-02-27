import React from 'react';
import Navbar from './component/Navbar';
import Ai from './component/Ai';
import AiData from './component/AiData';
import './App.css';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="img-container">
      <Navbar />
      <Ai movies={AiData}/>
      <Footer/>
    </div>
  );
}

export default App;
