'use strict';

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: [1,2,3,4]
    };
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <li key={i}>{pollObject}</li>;
    };
    return <ul>{this.state.polls.map(createPoll)}</ul>;
  }
});

module.exports = Feed;