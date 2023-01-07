import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/Login';
import SignupForm from './components/auth/Register';
import './App.css';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AddCar from './components/AddCar';
import DetailsPage from './pages/details/DetailsPaje';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/AddCar" element={<AddCar />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
