import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/Login';
import SignupForm from './components/auth/Register';
import Homepage from './components/auth/homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
