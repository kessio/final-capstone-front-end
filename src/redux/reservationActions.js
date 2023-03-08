import axios from "axios";

export const addReservation = (reservation) => ({
  type: "ADD_RESERVATION",
  payload: reservation,
});

export const fetchReservations = () => {
  return (dispatch) => {
    axios
      .get("/reservations")
      .then((response) => {
        dispatch({
          type: "FETCH_RESERVATIONS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
