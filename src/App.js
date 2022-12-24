import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
// import AddCar from './components/addCar/addCar';
import BookingScreen from './routes/Booking';
import ReservationScreen from './routes/Reservation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/cars" element={<DetailsPage />} />
          <Route element={<BookingScreen />} path="/booking" />
          <Route element={<ReservationScreen />} path="/reservation" />
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
