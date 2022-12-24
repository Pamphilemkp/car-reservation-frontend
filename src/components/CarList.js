/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import style from './homepage.module.css';

const CarList = (props) => {
  const { cars } = props;

  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <ul className={style.carslist}>

      <FaArrowAltCircleLeft onClick={sliderRef?.slickPrev} className={style.ArrowButton} />

      <Slider ref={setSliderRef} {...sliderSettings}>
        {cars.map(({ photo, name, description }) => (
          <li key={name}>
            <>
              <img src={photo} alt={name} className={style.carimage} />
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
      </Slider>

      <FaArrowAltCircleRight onClick={sliderRef?.slickNext} className={style.ArrowButton} />

    </ul>
  );
};

export default CarList;
