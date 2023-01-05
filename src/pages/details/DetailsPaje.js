import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { FetchCar } from '../../redux/store/store';
import './DetailsPage.css';
import color from '../../assets/images/color-wheel.png';

function DetailsPage() {
  // Get the userId param from the URL.
  let { id } = useParams();
  id = parseInt(id, 10);
  const cars = useSelector((state) => state.CarReducers);
  const dispatch = useDispatch();

  if (cars.length === 0) {
    dispatch(FetchCar());
  }

  // find the product with the id
  const car = cars.find((product) => product.id === id);

  return (
    <div className="app shadow-lg rounded">
      <div className="details" key={car.id}>
        <div className="img-div">
          <img className="w-100" src={car.photo} alt={car.name} />
        </div>
        <div className="box">
          <header className="d-flex justify-content-end flex-column align-items-end">
            <h2>{car.name}</h2>
            <span>{car.brand}</span>
          </header>
          <p className="px-3">{car.description}</p>
          <div className=" booking-div d-flex justify-content-between align-items-center p-2">
            <span>Booking fee:</span>
            <span>
              $
              {car.price}
            </span>
          </div>
          <div className="duration-div d-flex justify-content-between align-items-center p-2">
            <span>Duration:</span>
            <span>1 month</span>
          </div>
          <div className="color-div d-flex justify-content-end py-3">
            <img src={color} alt="" />
          </div>
          <div className="color-div d-flex justify-content-end py-3">
            <button
              type="button"
              className="btn reserve-btn d-flex justify-content-between align-items-center"
            >
              <i className="fa fa-cog text-white" aria-hidden="true" />
              <span className="text-white">Reserve</span>
              <span className="chevron-div">
                <i className="fas fa-chevron-right text-white" />
              </span>
            </button>
          </div>
        </div>
        <Link to="/">
          <div className="back-chevron-div">
            <i className="fas fa-chevron-left text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
