'use strict';

var _ = require("lodash"),
  AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  vote: function(option) {
    var pollRef = this.props.pollRef.child("options/" + option);
    
    //TODO: check if a vote needs to be removed from oanother option

    pollRef.child("votes/exampleuser").set({
      timestamp: Date.now(),
      location: "lorem"
    });

    //increment denormalised count
    pollRef.child("count").transaction(function(count) {
      if (!count) {
        return 1;
      } else {
        return count+1;
      }
    });
  },

  render: function() {
    return (
      <span>
        <h3>{this.props.data.question_string}</h3>
        <AnswerOptions vote={this.vote} options={this.props.data.options}/>
      </span>
    );
  }
});

module.exports = Poll;
