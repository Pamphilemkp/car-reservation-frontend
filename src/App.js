import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddCar from './components/AddCar';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/AddCar" element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
