import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import Header from './components/Header';
import Exchange from './pages/Exchange';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sell from './pages/Sell';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
