/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';

const CarList = (props) => { 
  
 return  (
 <div>
    <ul>
      {props.cars.map(({ photo, name }) => {
         <li>
          <><img src={photo} alt="image car" /><p>{name}</p></>
        </li>;
      })}
      ;
    </ul>
  </div>
  )
};

export default CarList;
