import axios from 'axios';

const FETCH_CARS_SUCCESS = 'car_reservation/reducers/cars/FETCH_CARS_SUCCESS';
const FETCH_CARS_FAILURE = 'car_reservation/reducers/cars/FETCH_CARS_FAILURE';
const FETCH_CARS_REQUEST = 'car_reservation/reducers/cars/FETCH_CARS_REQUEST';
const BASE_URL = 'api/v1/cars';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCars = (payload) => ({
  type: FETCH_CARS_SUCCESS,
  payload,
});

const fetchCarsFail = (error) => ({
  type: FETCH_CARS_FAILURE,
  error,
});

const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
  loading: true,
  error: null,
});

export const getCarsFromApi = () => async (dispatch) => {
  dispatch(fetchCarsRequest());
  try {
    const response = await axios.get(`${BASE_URL}/cars`);
    dispatch(fetchCars(response.data));
  } catch (error) {
    dispatch(fetchCarsFail(error.message));
  }
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default carsReducer;
