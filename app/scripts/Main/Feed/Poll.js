'use strict';

var _ = require("lodash"),
    moment = require("moment"),
    AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  vote: function(option) {
    var pollRef = this.props.pollRef.child("options/" + option);
    
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
  },

  getInitialState: function() {
    return {};
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
  },

  componentWillUnmount: function() {
    console.log("Unmounting");
    this.props.pollRef.off("value", this.attachListener);
  },

  render: function() {
    return (
      <div className="poll">
        <span className="question">{this.state.data.question}</span>
        <span className="votes pull-right">{this.state.data.votes}</span>
        <span className="date pull-right"> {this.getPollDateDisplay(this.state.data.created_at)}&nbsp;&nbsp;&nbsp;</span>
        <AnswerOptions vote={this.vote} options={this.state.data.options}/>
      </div>
    );
  }
});

module.exports = Poll;
