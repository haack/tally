'use strict';

var _ = require('lodash'),
  Poll = require('./Poll');

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: {
        poll1: {
          question_string: "Wagwan?",
          options: {
            yes: {count:123},
            no: {count:321}
          }
        },
        poll2: {
          question_string: "Hello?",
          options: {
            yes: {count:9001},
            no: {count:-123}
          }
        }
      }
    };
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <li key={i}><Poll data={pollObject}/></li>;
    };
    return <ol>{_.map(this.state.polls, function(value, key) {return createPoll(value, key)})}</ol>;
  }
});

module.exports = Feed;