import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
import BookingScreen from './routes/Booking';
import ReservationScreen from './routes/Reservation';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/cars" element={<DetailsPage />} />
          <Route element={<BookingScreen />} path="/booking" />
          <Route element={<ReservationScreen />} path="/reservation" />
          <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

    </Provider>
     </div>
     );
    }



export default App;
