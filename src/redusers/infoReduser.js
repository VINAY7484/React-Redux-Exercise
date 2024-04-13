import { ADD_INFO } from "../actions/infoAction";
const initialState = [];

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default infoReducer;
