import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
// import ReservationScreen from './routes/Reservation';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Reserve from './components/forms/Reserve';
import MyReservations from './components/reservations/MyReservations';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/cars" element={<DetailsPage />} />
            {/* <Route element={<ReservationScreen />} path="/reservation" /> */}
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reservation" element={<MyReservations />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
