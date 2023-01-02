import CarReducers from '../redux/store/store';

test('Test reducer called eihtout parameters will return an empty array', () => {
  expect(CarReducers()).toHaveLength(0);
});
