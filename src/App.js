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
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // const data = JSON.parse(localStorage.getItem('user'));
  const car = useSelector((state) => state.cars);
  const { user } = data || {};

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  });

  return (
    <div className="App">
      <TopNav />
      <div className="d-flex">
        <SideNav />
        <Routes>

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
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
