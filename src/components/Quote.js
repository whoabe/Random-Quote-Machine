import React from "react";
import { connect } from "react-redux";

const Quote = ({ quote }) => {
  return (
    <div className="quotes">
      <div id="text">{quote.quote}</div>
      <div id="author">-{quote.author}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quote: state.currentQuotes,
});

export default connect(mapStateToProps, {})(Quote);
