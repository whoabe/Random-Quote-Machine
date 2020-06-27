import { combineReducers } from "redux";
import quotes from "./quotes";
import currentQuotes from "./currentQuotes";

export default combineReducers({ quotes, currentQuotes });
