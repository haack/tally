'use strict';

var _ = require("lodash"),
  AnswerOptions = require("./AnswerOptions");

var Poll = React.createClass({
  render: function() {
    return (
      <span>
        <h3>{this.props.data.question_string}</h3>
        <AnswerOptions options={this.props.data.options}/>
      </span>
    );
  }
});

module.exports = Poll;
