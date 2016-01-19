'use strict';

var _ = require('lodash'),
  Poll = require('./Poll'),
  Loading = require('./Loading');

var firebaseRef = new Firebase(FirebaseURL + "/polls");

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: [],
      count: 1,
      orderBy: "votes"
    };
  },

  componentWillMount: function() {
    firebaseRef.orderByChild(this.state.orderBy).on("child_added", function(data) {
      this.state.polls.unshift(data.key()) //push to bottom
      this.setState({
        polls: this.state.polls
      });
    }.bind(this));
  },

  render: function() {
    var createPoll = function(i) {
      return <Poll key={i} pollRef={firebaseRef.child(i)} />;
    };
    if (this.state.count > 0) {
      return <div>{_.map(this.state.polls, function(key) {return createPoll(key)})}</div>;
    } else {
      return <Loading />
    }
  },

  componentWillUnmount: function() {
    firebaseRef.off();
  }
});

module.exports = Feed;