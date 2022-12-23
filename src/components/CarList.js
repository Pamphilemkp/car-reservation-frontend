/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import style from './homepage.module.css';

const CarList = (props) => (

  <ul className={style.carslist}>
    {props.cars.map(({ photo, name, description }) => (
      <li key={name}>
        <>
          <img src={photo} alt="image car" className={style.carimage} />
          <p className={style.carname}>{name}</p>
          <p
            className={style.description}
            style={{
              paddingLeft: '20px', paddingRight: '20px', marginLeft: '20px', marginRight: '20px',
            }}
          >
            {description}
          </p>
        </>
      </li>
    ))}
  </ul>
);

export default CarList;
