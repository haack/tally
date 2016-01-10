'use strict';

var _ = require('lodash'),
  Poll = require('./Poll'),
  Loading = require('./Loading');

var firebaseRef = new Firebase(FirebaseURL + "/polls");

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
        count: dataSnapshot.child("list").numChildren()
      });
    }.bind(this));

    // firebaseRef.child("list").orderByChild("votes").on("child_added", function(snapshot) {
    //   console.log(snapshot.key() + " was " + snapshot.val().votes + " meters tall");
    //   this.setState({
    //     list: _.assign(this.state.list, {[snapshot.key()]: snapshot.val()}),
    //     count: this.state.count+1
    //   });
    // }.bind(this));
  },

  render: function() {
    var createPoll = function(pollObject, i) {
      return <Poll key={i} data={pollObject} pollRef={firebaseRef.child("list/"+i)} />;
    };
    if (this.state.count > 0) {
      return <div>{_.map(this.state.list, function(value, key) {return createPoll(value, key)})} Poll count: {this.state.count}</div>;
    } else {
      return <Loading />
    }
  },

  componentWillUnmount: function() {
    firebaseRef.off();
  }
});

module.exports = Feed;