
import './App.css';
import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from'./components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
    <div>
    <Routes>

      <Route exact path="/register" element={<RegisterPage />}/>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
      
    </div>
  </Router>
  );
}



export default App;

