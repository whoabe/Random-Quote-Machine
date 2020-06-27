import {
  GET_CURRENT_QUOTE_SUCCESS,
  GET_CURRENT_QUOTE_ERROR,
} from "../actions/types";

const initialState = { quote: null, author: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_QUOTE_SUCCESS:
      const quote =
        payload.quotes[Math.floor(Math.random() * payload.quotes.length)];
      return quote;
    case GET_CURRENT_QUOTE_ERROR:
      return state;
    default:
      return state;
  }
}
