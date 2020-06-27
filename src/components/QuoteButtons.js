import React from "react";
import { connect } from "react-redux";
import { getQuotes } from "../actions/quotes";

const QuoteButtons = ({ quote, quotes, getQuotes }) => {
  return (
    <div className="buttons">
      <span id="tweet-quote">
        <a
          className="twitter-share-button"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
            encodeURIComponent(
              '"' + quote.author + '"' + "\n" + "-" + quote.quote
            )
          }
          target="_blank"
        >
          Tweet
        </a>
      </span>
      <span onClick={() => getQuotes(quotes)} id="new-quote">
        New quote
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
  quote: state.currentQuotes,
});

export default connect(mapStateToProps, { getQuotes })(QuoteButtons);
