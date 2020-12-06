import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <Router>
      {/* global style css */}
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
