import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Hero, Login, Navbar, PopularEvent, Register, Speaker } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <PopularEvent />
            <Speaker />
            <Footer />
          </>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
