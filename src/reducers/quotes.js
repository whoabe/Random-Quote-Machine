import { GET_QUOTES_SUCCESS, GET_QUOTES_ERROR } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: payload.quotes,
      };
    case GET_QUOTES_ERROR:
      return state;
    default:
      return state;
  }
}
