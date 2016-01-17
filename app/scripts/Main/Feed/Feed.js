'use strict';

var _ = require('lodash'),
  Poll = require('./Poll'),
  Loading = require('./Loading');

var firebaseRef = new Firebase(FirebaseURL + "/polls");

var Feed = React.createClass({
  getInitialState: function() {
    return {
      polls: [],
      count: 1
    };
  },

  componentWillMount: function() {
    // firebaseRef.on("value", function(dataSnapshot) {
    //   this.setState({
    //     poll: dataSnapshot.val(),
    //     count: dataSnapshot.numChildren()
    //   });
    // }.bind(this));

    firebaseRef.orderByChild("votes").on("child_added", function(data) {
      this.state.polls.unshift(data.key()) //push to bottom
      this.setState({
        polls: this.state.polls
      });
    }.bind(this));

    // firebaseRef.orderByChild("votes").on("child_added", function(snapshot) {
    //   console.log(snapshot.key() + " was " + snapshot.val().votes + " meters tall");
    //   this.setState({
    //     polls: _.assign(this.state.polls, {[snapshot.key()]: snapshot.val()}),
    //     count: this.state.count+1
    //   });
    // }.bind(this));
  },

  render: function() {
    var createPoll = function(i) {
      console.log(i);
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