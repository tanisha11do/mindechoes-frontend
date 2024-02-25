import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Loginsign from './Components/Loginsign';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Quiz" element = {<Quiz/>}/>
        <Route path="/Login" element = {<Loginsign/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;