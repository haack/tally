'use strict';

var _ = require('lodash'),
  Poll = require('./Poll');

var Feed = React.createClass({
  polls: {},

  getInitialState: function() {
    return {
      polls: {},
      count: 0
    };
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://rapidly.firebaseio.com/polls");
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        this.polls[dataSnapshot.key()] = dataSnapshot.val();
        this.setState({
          polls: this.polls,
          count: this.state.count+1
        });
      }.bind(this));
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <li key={i}><Poll data={pollObject}/></li>;
    };
    if (this.state.count > 0) {
      return <ol>{_.map(this.state.polls, function(value, key) {return createPoll(value, key)})}</ol>;
    } else {
      return <span>Loading polls...</span>
    }
  }
});

module.exports = Feed;