/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import style from './homepage.module.css';

const CarList = (props) => {
  const { cars } = props;
  const navigate = useNavigate();

  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
  };

  // eslint-disable-next-line no-unused-vars
  const [sliderRef, setSliderRef] = useState(null);
  const showDetailsPage = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <ul className={style.carslist}>
      {/* <FaArrowAltCircleLeft onClick={sliderRef?.slickPrev} className={style.ArrowButton} /> */}

      <Slider ref={setSliderRef} {...sliderSettings}>
        {cars.map(({
          id,
          photo,
          name,
          description,
        }) => (
          <li key={name} className="car-list-item-container">
            <>
              <img src={photo} alt={name} className={style.carimage} />
              <p className={style.carname}>{name}</p>
              <p className={style.description}>{description}</p>
              <div className="car-media-icons">
                <a
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/pamphile-musonda"
                >
                  <FaLinkedin />
                </a>
                <a
                  aria-label="linkedin"
                  href="https://twitter.com/PamphileMusonda"
                >
                  <FaTwitter />
                </a>
                <a aria-label="linkedin" href="https://github.com/Pamphilemkp">
                  <FaGithub />
                </a>
              </div>
              <button
                type="button"
                onClick={() => showDetailsPage(id)}
                className="btn m-2"
                style={{ backgroundColor: '#9acd32', color: '#fff' }}
              >
                See Details
              </button>
            </>
          </li>
        ))}
      </Slider>

      <div onClick={sliderRef?.slickPrev} className={style.ArrowButton}>
        <i className="fas fa-chevron-right text-white" />
      </div>
    </ul>
  );
};

export default CarList;
