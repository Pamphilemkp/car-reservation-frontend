import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCars } from '../../redux/details/detailsSlice';

function DetailsPage() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {' '}
      <h1>Cars</h1>
      <div>{cars.map((car) => car.name)}</div>
    </>
  );
}

export default DetailsPage;
