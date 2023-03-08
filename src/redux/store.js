import { createStore } from "redux";
import reservationReducer from "./reservationReducer";

const store = createStore(reservationReducer);

export default store;
