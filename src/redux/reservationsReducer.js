const initialState = {
  reservations: [],
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case 'FETCH_RESERVATIONS':
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
