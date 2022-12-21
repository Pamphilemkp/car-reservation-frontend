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
    <div className="h-100 mt-4">
      {cars.map((car) => (
        <div className="container" key={car.id}>
          <div className="row">
            <div className="col">
              <img className="w-100 h-75" src={car.photo} alt={car.name} />
            </div>
            <div className="col">
              <div>
                <p>{car.name}</p>
              </div>
              <div>
                <p>{car.brand}</p>
              </div>
              <div>
                <p>
                  $
                  {car.price}
                </p>
              </div>
              <div>
                <p>{car.description}</p>
              </div>
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
