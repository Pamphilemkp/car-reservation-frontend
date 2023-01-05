import { React, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
import BookingScreen from './routes/Booking';
import ReservationScreen from './routes/Reservation';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Reserve from './components/forms/Reserve';
import DeleteCar from './components/deleteCar/DeleteCar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/cars" element={<DetailsPage />} />
           
            
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/deleteCar" element={<DeleteCar />} />
            {isLoggedIn ? (
            <>
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/reservation" element={<MyReservations />} />
              {user.role === 'admin' && (
              <>
              <Route path="/delete" element={<DeleteCar car={car} />} />
              </>
              )}
            </>
          ) : (
            ''
          )}
          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
