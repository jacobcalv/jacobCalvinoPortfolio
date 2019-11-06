import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"

import './App.css';
import Bio from './components/Bio'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bio/>
      <Projects/>
    </div>
    
  );
}

export default App;
