import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './components/details/DetailsPage';
import store from './redux/configureStore';
import AddCar from './components/addCar/addCar';
import 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/cars" element={<DetailsPage />} />
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
