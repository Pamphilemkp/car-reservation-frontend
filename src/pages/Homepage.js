/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarList from '../components/CarList';
import { FetchCar } from '../redux/store/store';

const cars = useSelector((state) => state.CarReducers);
const dispatch = useDispatch;

const Homepage = () => {
  useEffect(() => {
    dispatch(FetchCar());
  });

  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};

export default Homepage;
