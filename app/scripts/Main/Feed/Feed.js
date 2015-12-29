'use strict';

var _ = require('lodash'),
  Poll = require('./Poll');

var firebaseRef = new Firebase("https://rapidly.firebaseio.com/polls");

var Feed = React.createClass({
  getInitialState: function() {
    return {
      list: {},
      count: 0
    };
  },

  componentWillMount: function() {
    firebaseRef.on("value", function(dataSnapshot) {
      this.setState({
        list: dataSnapshot.val().list,
        count: dataSnapshot.val().count
      });
    }.bind(this));
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <Poll key={i} data={pollObject} pollRef={firebaseRef.child("list/"+i)} />;
    };
    if (this.state.count > 0) {
      return <div>{_.map(this.state.list, function(value, key) {return createPoll(value, key)})} Poll count: {this.state.count}</div>;
    } else {
      return <span>Loading polls...</span>
    }
  },

  componentWillUnmount: function() {
    firebaseRef.off();
  }
});

module.exports = Feed;