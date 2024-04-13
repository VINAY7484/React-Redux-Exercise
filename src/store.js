import { createStore, combineReducers } from "redux";
import infoReducer from "./redusers/infoReduser";
const reducer = combineReducers({
  //  Add your reducers here.
  infoReducer,
});
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
// export const addToCart=(product)=
