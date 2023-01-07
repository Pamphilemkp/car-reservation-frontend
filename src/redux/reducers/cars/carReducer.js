const DISPLAY_CAR = 'CAR_RESERVATION/CARS/DISPLAY_CAR';
const URL = 'api/v1/cars';

const displayCar = (payload) => ({
  type: DISPLAY_CAR,
  payload,
});

export const fetchCarFromDB = (id) => async (dispatch) => {
  const req = await (await fetch(`${URL}/cars/${id}`)).json();
  dispatch(displayCar(req));
};

const carReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_CAR:
      return action.payload;
    default:
      return state;
  }
};

export default carReducer;
