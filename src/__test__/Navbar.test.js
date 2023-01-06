import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../pages/Navbar';
import store from '../redux/configureStore';

test('should macth the home page snapshot', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
