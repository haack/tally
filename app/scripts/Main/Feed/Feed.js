'use strict';

var _ = require('lodash'),
  Poll = require('./Poll'),
  OrderSelector = require('./OrderSelector'),
  Loading = require('./Loading');

var firebaseRef = new Firebase(FirebaseURL + "/polls");

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: [],
      count: 0,
      orderBy: "votes"
    };
  },

  changeOrderBy: function(filter) {
    this.setState({
      orderBy: filter
    }, function() {
      this.refreshFeed();  
    }.bind(this));
  },

  attachFirebase: function() {
    firebaseRef.orderByChild(this.state.orderBy).on("child_added", function(data) {
      this.state.polls.unshift(data.key()) //push to bottom
      this.setState({
        polls: this.state.polls,
        count: this.state.count+1
      });
    }.bind(this));
  },

  detachFirebase: function() {
    firebaseRef.off();
  },

  clearFeed: function() {
    this.state.polls = [];
    this.state.count = 0;
    this.setState({
      polls: this.state.polls,
      count: this.state.count
    });
  },

  refreshFeed: function() {
    this.detachFirebase();
    this.clearFeed();
    this.attachFirebase();
  },

  componentWillMount: function() {
    this.attachFirebase();
  },

  componentWillUnmount: function() {
    this.detachFirebase();
  },

  render: function() {
    var createPoll = function(i) {
      return <Poll key={i} pollRef={firebaseRef.child(i)} />;
    };
    if (this.state.count > 0) {
      return <div>
        <OrderSelector onSelect={this.changeOrderBy}/>
        {_.map(this.state.polls, function(key) {return createPoll(key)})}
        </div>;
    } else {
      return <Loading />
    }
  }
});

module.exports = Feed;