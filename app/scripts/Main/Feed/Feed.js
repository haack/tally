'use strict';

var _ = require('lodash'),
    Poll = require('./Poll'),
    Loading = require('../Loading'),
    OrderSelector = require('./OrderSelector');

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

  //TODO: decallbackify if want to allow reattaching firebase 
  //before clear feed is drawn
  clearFeed: function(cb) {
    this.setState({
      polls: [],
      count: 0
    }, function() {
      cb()
    }.bind(this));
  },

  refreshFeed: function() {
    this.detachFirebase();
    this.clearFeed(function() {
      this.attachFirebase();  
    }.bind(this));
  },

  componentWillMount: function() {
    this.attachFirebase();
  },

  componentWillUnmount: function() {
    this.detachFirebase();
  },

  render: function() {
    var createPoll = function(key, index) {
      return <Poll key={key} index={index} id={key} pollRef={firebaseRef.child(key)} />;
    };
      // <Loading />
    return <div>
      <OrderSelector onSelect={this.changeOrderBy}/>
      <div className="poll-list">
        {_.map(this.state.polls, function(key, index) {return createPoll(key, index)})}
        
      </div>
    </div>;
  }
});

module.exports = Feed;