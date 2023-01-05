import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
import BookingScreen from './routes/Booking';
import ReservationScreen from './routes/Reservation';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Reserve from './components/forms/Reserve';
import DeleteCar from './components/deleteCar/DeleteCar';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCarsThunk());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/cars" element={<DetailsPage />} />
            <Route element={<BookingScreen />} path="/booking" />
            <Route element={<ReservationScreen />} path="/reservation" />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/deleteCar" element={<DeleteCar />} />
            <Route element={<BookingScreen />} path="/booking" />
          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
