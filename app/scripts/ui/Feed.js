'use strict';

var _ = require('lodash'),
  Poll = require('./Poll');

var Feed = React.createClass({
  getInitialState: function() {
    return {
      list: {},
      count: 0
    };
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://rapidly.firebaseio.com/polls");
      this.firebaseRef.on("value", function(dataSnapshot) {
        this.setState({
          list: dataSnapshot.val().list,
          count: dataSnapshot.val().count
        });
      }.bind(this));
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <li key={i}><Poll data={pollObject}/></li>;
    };
    if (this.state.count > 0) {
      return <ol>{_.map(this.state.list, function(value, key) {return createPoll(value, key)})}</ol>;
    } else {
      return <span>Loading polls...</span>
    }
  }
});

module.exports = Feed;