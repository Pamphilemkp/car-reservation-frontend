import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Reserve from './components/forms/Reserve';
import MyReservations from './components/reservations/MyReservations';
import DetailsPage from './pages/details/DetailsPaje';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/cars" element={<DetailsPage />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reservation" element={<MyReservations />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>

      </Provider>
      <Routes>
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
