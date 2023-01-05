/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/actions/CarAction';

const AddCar = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [dailyrate, setDailyrate] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  const Navigate = useNavigate();
  useEffect(() => {
    if (name && image && type && description && brand && dailyrate) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, image, type, description, brand, dailyrate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('car[name]', name);
    formData.append('car[image]', image);
    formData.append('car[car_type]', type);
    formData.append('car[description]', description);
    formData.append('car[brand]', brand);
    formData.append('car[daily_rate]', dailyrate);

    dispatch(addCar(formData));
    Navigate('/');
  };

  // handle image upload
  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      {/* add from using tailwindcss */}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="name">
          <div className="w-full px-3">
            <label
              className="label-name"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="label-name2"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="car-images">
          <div className="image">
            <label
              className="label-image"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="input-image"
              id="image"
              type="file"
              placeholder="Image"
              onChange={handleUploadImage}
              multiple
            />
          </div>
        </div>
        <div className="car-type">
          <div className="type">
            <label
              className="label-type"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="input-type"
              id="type"
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
          <div className="car-description">
            <label
              className="label-description"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="input-description"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="brand">
          <div className="car-brand">
            <label
              className="label-brand"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="input-brand"
              id="brand"
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="daily_rate">
          <div className="car-daily_rate">
            <label
              className="label-daily_rate" 
              htmlFor="daily_rate"
            >
              Daily Rate
            </label>
            <input
              className="input-daily_rate" 
              id="daily_rate"
              type="text"
              placeholder="Daily Rate"
              value={dailyrate}
              onChange={(e) => setDailyrate(e.target.value)}
            />
          </div>
        </div>
        <div className="addcar-button">
          <div className="button-name">
            <button
              className="add-car"
              type="submit"
            >
              Add Car
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCar;
