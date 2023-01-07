import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/Login';
import SignupForm from './components/auth/Register';
import './App.css';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import DetailsPage from './pages/details/DetailsPaje';
import Reserve from './components/forms/Reserve';
import MyReservations from './components/reservations/MyReservations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservation" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
