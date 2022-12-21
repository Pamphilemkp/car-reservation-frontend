import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCars } from '../../redux/details/detailsSlice';
import './DetailsPage.css';

function DetailsPage() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="app">
      {cars.map((car) => (
        <div className="details" key={car.id}>
          <div className="img-div">
            <img src={car.photo} alt={car.name} />
          </div>
          <div className="box container">
            <div className="row">
              <h2>{car.name}</h2>
              <span>
                $
                {car.price}
              </span>
              <p>{car.description}</p>
              <div>
                <button type="button" className="btn btn-info">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsPage;
