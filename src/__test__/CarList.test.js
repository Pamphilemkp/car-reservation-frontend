import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarList from '../components/CarList';

const data = [
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    description: 'Mercedes-Benz AMG GT is available in Selenite Grey. Mercedes-Benz AMG GT is also available in 11 colours.',
    price: '$93,550',
    photo: 'https://imgd.aeplcdn.com/1056x594/n/dpca6sa_1475133.jpg?q=75&wm=1',
    brand: 'Mercedes-Benz AMG GT',
  },
  {
    id: 2,
    name: 'Bmw 4-series',
    description: 'The 2022 BMW 4 Series is among the most expensive vehicles in the luxury small car class.',
    price: '$45,800',
    photo: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/2022-bmw-4-series-index.png',
    brand: 'Blue Bmw 4-series',
  },
];

test('Should match the home page snapshot', () => {
  const tree = render(
    <BrowserRouter>
      <CarList cars={data} />
    </BrowserRouter>,
  );

  expect(tree).toMatchSnapshot();
});
