import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from '../pages/Homepage';
import store from '../redux/configureStore';

test('should macth the home page snapshot', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
