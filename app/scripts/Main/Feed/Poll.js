'use strict';

//TODO: Create date display component and move refresh code to there

var _ = require("lodash"),
    moment = require("moment"),
    classNames = require("classnames"),
    AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  getInitialState: function() {
    return {
      hasVoted: true,
      votedOption: "Loading..."
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
      window.Auth.getUserRef().child("polls_voted").update(
        {
          [this.props.id]: {
            "time": Date.now(),
            "option": option
          }
        }
      );

      this.setState({
        hasVoted: true,
        votedOption: option
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
    console.log(data.val());
    if (!data.val()) {
      this.setState({
        hasVoted: false
      });
    } else {
      this.setState({
        votedOption: data.val().option
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
        <div className="poll-left">
          <div className="poll-index">
            #{this.props.index+1}
          </div>
          <div>
            <div><span className="poll-info">Q. </span><span className="question">{this.state.data.question}</span></div>
            <div className="poll-answer">
              <AnswerOptions vote={this.vote} voted={this.state.votedOption} options={this.state.data.options}/>
            </div>
            <span className="poll-info"> {this.getPollDateDisplay(this.state.data.created_at)}</span>
          </div>
        </div>
        <div className="poll-right">
          <div className="poll-votes-label">Votes:</div>
          <div className="poll-votes-value">{this.state.data.votes}</div>
        </div>
      </div>
    );
  }
});

module.exports = Poll;
