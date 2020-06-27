import axios from "axios";
import {
  GET_QUOTES_SUCCESS,
  GET_QUOTES_ERROR,
  GET_CURRENT_QUOTE_SUCCESS,
  GET_CURRENT_QUOTE_ERROR,
} from "./types";

export const getQuotes = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    dispatch({
      type: GET_QUOTES_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: GET_CURRENT_QUOTE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_QUOTES_ERROR,
    });
    console.log(err);
  }
};

// export const getFirstQuote = () => {
//     return {
//         type: GET_CURRENT_QUOTE_SUCCESS,
//         payload: quote
//     }
// }
