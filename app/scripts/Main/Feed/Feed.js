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
    firebaseRef.orderByChild(this.state.orderBy).limitToLast(100).on("child_added", function(data) {
      
      this.state.polls.unshift({key: data.key(), data: data.val()}) //push to bottom  
      
      if (this.state.orderBy === 'hot') {
        this.hotSort(this.state.polls);
      }

      this.setState({
        polls: this.state.polls,
        count: this.state.count+1
      });
    }.bind(this));
  },


  // Score = (P-1) / (T+2)^G
  // where,
  // P = points of an item (and -1 is to negate submitters vote)
  // T = time since submission (in hours)
  // G = Gravity, defaults to 1.8 in news.arc
  getHotScore: function(P, T, G=1.8) {
    return (P+1) / Math.pow((T + 2), G);
  },

  getHours: function(ms, now) {
    return (now - ms) / 36e5;
  },

  hotSort: function(polls) {
    let now = Date.now();

    polls.sort((a, b) => {
      let scoreA = this.getHotScore(a.data.votes, this.getHours(a.data.created_at, now));
      let scoreB = this.getHotScore(b.data.votes, this.getHours(b.data.created_at, now));
      console.log(`${a.data.question} : ${scoreA}`)
      return (scoreA > scoreB) ? -1 : 1;
    });
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
    return (
    <div>
      <OrderSelector onSelect={this.changeOrderBy}/>
      <div className="poll-list">
        {_.map(this.state.polls, function(key, index) {return createPoll(key.key, index)})}
        <Loading />
      </div>
    </div>
    );
  }
});

module.exports = Feed;