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
      return <li key={i}><Poll data={pollObject} pollRef={firebaseRef.child("list/"+i)} /></li>;
    };
    if (this.state.count > 0) {
      return <ol>Poll count: {this.state.count} {_.map(this.state.list, function(value, key) {return createPoll(value, key)})}</ol>;
    } else {
      return <span>Loading polls...</span>
    }
  }
});

module.exports = Feed;