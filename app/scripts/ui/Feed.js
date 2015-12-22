'use strict';

var _ = require('lodash');

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: [
        {
          question_string: "Wagwan?",
          options: {
            yes: {count:123},
            no: {count:321}
          }
        },
        {
          question_string: "Hello?",
          options: {
            yes: {count:123},
            no: {count:321}
          }
        }
      ]
    };
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <li key={i}>{pollObject.question_string}</li>;
    };
    return <ul>{_.map(this.state.polls, function(value, key) {return createPoll(value, key)})}</ul>;
  }
});

module.exports = Feed;