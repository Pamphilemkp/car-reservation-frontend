import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import CarList from '../components/CarList';
import { FetchCar } from '../redux/store/store';
import { useIsAuthenticated } from '../redux/auth/hook';
import LoginForm from '../components/auth/Login';

const Homepage = () => {
  const cars = useSelector((state) => state.CarReducers);
  const dispatch = useDispatch();
  const useAuthenticated = useIsAuthenticated();
  const homeparagraph = {
    color: 'rgba(0, 0, 0, 0.5)',
    textalign: 'center',
  };

  useEffect(() => {
    dispatch(FetchCar());
  }, [dispatch]);

  if (!useAuthenticated) {
    return (
      <div>
        <>
          <LoginForm />
        </>
      </div>
    );
  }

  return (
    <div className="home-page">
      <Navbar />
      <div className="title-container">
        <div>
          <h2>LATEST MODELS</h2>
          <p className="subtile" style={homeparagraph}>Please select a car model to book</p>
        </div>
        <CarList cars={cars} />

      </div>
    </div>
  );
};

export default Homepage;
