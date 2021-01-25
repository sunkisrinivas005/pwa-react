import { GET_ALL_RESTAURANTS } from "../constants/ActionTypes";

const INIT_STATE = {
  loader: true,
  restaurants : []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload,
      }
    }
    default:
      return state;
  }
};
