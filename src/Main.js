import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import News from './News';
import Header from './header';
import NFTs from './Nfts';

function Main() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/news" element={<News />} />
        <Route path='/nft' element={<NFTs/>}/>
      </Routes>
    </Router>
  );
}

export default Main;