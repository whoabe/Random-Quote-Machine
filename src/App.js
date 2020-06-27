import React, { useEffect } from "react";
import Quote from "./components/Quote";
import QuoteButtons from "./components/QuoteButtons";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { getQuotes } from "./actions/quotes";

import "./style/App.css";

const App = () => {
  useEffect(() => store.dispatch(getQuotes()), []);

  return (
    <Provider store={store}>
      <div id="quote-box">
        <Quote />
        <QuoteButtons />
      </div>
    </Provider>
  );
};
export default App;
