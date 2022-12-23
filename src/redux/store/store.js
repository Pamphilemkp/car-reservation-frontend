import asyncThunk from 'redux-async-thunk';

const GET_CAR = 'car_reservation/store/GET_CAR';

const initialeState = [
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    description: 'Mercedes-Benz AMG GT is available in Selenite Grey. Mercedes-Benz AMG GT is also available in 11 colours, namely, Magnetite Black, Iridium Silver, Brilliant Blue,AMG Solarbeam, Designo Hyacinth Red Metallic, Designo Diamond White Bright, Designo Iridium Silver Magno, Designo  Selenite Grey Magno, Amg Green Hell Magno, Jupiter Red, Designo Brilliant Blue Magno',
    price: '$93,550',
    photo: 'https://imgd.aeplcdn.com/1056x594/n/dpca6sa_1475133.jpg?q=75&wm=1',
    brand: 'Mercedes-Benz AMG GT',
  },
  {
    id: 2,
    name: 'Bmw 4-series',
    description: 'The 2022 BMW 4 Series is among the most expensive vehicles in the luxury small car class. The all-new 430i Gran Coupe retails for $45,200, with the BMW 4 Series coupe starting at $45,800 and the base convertible at $53,30',
    price: '$45,800',
    photo: 'https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Blue Bmw 4-series',
  },
  {
    id: 3,
    name: 'Audi A3',
    description: 'The Diesel engine is 1968 cc while the Petrol engine is 1395 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the A3 hasa mileage of 19.2 to 20.38 kmpl & Ground clearance of A3 is 165mm. The A3 is a 5 seater 4 cylinder car',
    price: '$34,900',
    photo: 'https://images.carandbike.com/car-images/colors/audi/a3/audi-a3-misano-red-pearl-effect.png?v=1',
    brand: 'Audi A3 Red',
  },
  {
    id: 4,
    name: 'Dodge Viper',
    description: 'The Dodge Viper, manufactured in the U.S. from 1992 to 2017, is a two-seat sports car with coupe and convertible versions. The Viper is known for its knockout styling and blazing acceleration, as it is able to reach 0-60 MPH in as little as the low 3-second range.',
    price: '$93,000',
    photo: 'https://mysterio.yahoo.com/mysterio/api/92D08EF2A9592924A74079D6563F4AA25EFFA8AEEAF730BBCCE0C6B9F016856C/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn',
    brand: 'Dodge Viper',

  },
];

const ApiUrl = 'http://localhost:3000/api/v1/cars';

const CarReducers = (state = initialeState, action = {}) => {
  switch (action.type) {
    case `${GET_CAR}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const FetchCar = asyncThunk(GET_CAR, async () => {
  const response = await fetch(ApiUrl);
  const value = await response.json();
  return value;
});

export default CarReducers;
