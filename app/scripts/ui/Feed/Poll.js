'use strict';

var _ = require("lodash"),
  AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  vote: function(option) {
    var pollRef = this.props.pollRef.child("options/" + option);
    
    //TODO: check if hasn't already voted    
    //TODO: check if a vote needs to be removed from another option

    pollRef.child("votes/exampleuser").set({
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
  },

  getInitialState: function() {
    return {
      totalVotes: 0
    };
  },

  //catch changes to number of votes to allow change to total
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      totalVotes: this.getTotalVotes(nextProps.data.options)
    });
  },

  //needed as the above funciton isn't called on initial prop values
  componentWillMount: function() {
    this.setState({
      totalVotes: this.getTotalVotes(this.props.data.options)
    });
  },

  getTotalVotes: function(options) {
    return _.sum(options, function(option) {
      return option.count;
    });
  },

  render: function() {
    return (
      <span>
        <h3>{this.props.data.question_string} ({this.state.totalVotes} votes)</h3>
        <AnswerOptions vote={this.vote} options={this.props.data.options}/>
      </span>
    );
  }
});

module.exports = Poll;
