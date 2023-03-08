const initialState = [];

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS':
      return action.payload;
    case 'ADD_RESERVATION':
      return [...state, action.payload];
    default:
      return state;
  }
};



export default reservationsReducer;
