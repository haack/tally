'use strict';

//TODO: Create date display component and move refresh code to there

var _ = require("lodash"),
    moment = require("moment"),
    classNames = require("classnames"),
    AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  getInitialState: function() {
    return {
      hasVoted: true
    }
  },

  vote: function(option) {
    if (!this.state.hasVoted) {
      var pollRef = this.props.pollRef.child("options/" + option);
      var refreshListener;
      
      //TODO: check if hasn't already voted    
      //TODO: check if a vote needs to be removed from another option

      pollRef.child("votes/" + Auth.getAuth().uid).set({
        timestamp: Date.now(),
        location: "lorem"
      });

      //TODO: figure out how to restrict access to this function
      //increment denormalised count
      pollRef.child("count").transaction(function(count) {
        if (!count) {
          return 1;
        } else {
          return count+1;
        }
      });

      pollRef.parent().parent().child("votes").transaction(function(count) {
        if (!count) {
          return 1;
        } else {
          return count+1;
        }
      });

      //record vote under user
      window.Auth.getUserRef().child("polls_voted").update({[this.props.id]: Date.now()});

      this.setState({
        hasVoted: true
      });
    }
  },

  attachListener: function(data) {
    this.setState({
      data: data.val()        
    });
  },

  getPollDateDisplay: function(ms) {
    return moment(ms).fromNow();//.duration().humanize();
  },

  componentWillMount: function() {
    this.props.pollRef.on("value", this.attachListener);

    window.Auth.getUserRef().child("polls_voted/"+this.props.id).once("value", this.fetchHasVoted);
  },

  fetchHasVoted: function(data) {
    if (!data.val()) {
      this.setState({
        hasVoted: false
      });
    }
  },

  componentWillUnmount: function() {
    this.props.pollRef.off("value", this.attachListener);
    window.clearInterval(this.refreshListener);
  },

  componentRefresh: function() {
    this.setState({});
  },

  componentDidMount: function() {
    this.refreshListener = setInterval(this.componentRefresh, 60000);
  },

  render: function() {
    var classes = classNames({
      'poll': true,
      'voted': this.state.hasVoted
    });

    return (
      <div className={classes}>
        <span className="question">{this.state.data.question}</span>
        <span className="votes pull-right">{this.state.data.votes}</span>
        <span className="date pull-right"> {this.getPollDateDisplay(this.state.data.created_at)}&nbsp;&nbsp;&nbsp;</span>
        <AnswerOptions vote={this.vote} options={this.state.data.options}/>
      </div>
    );
  }
});

module.exports = Poll;
