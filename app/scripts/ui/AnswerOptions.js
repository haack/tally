'use strict';

var _ = require("lodash"),
  OptionResult = require("./OptionResult");

var Poll = React.createClass({
  render: function() {
    return (
      <span>
        <h3>{this.props.data.question_string}</h3>
        {_.map(this.props.data.options, function(value, key) {return <OptionResult key={key} option={key} data={value}/>;})}
      </span>
    );
  }
});

module.exports = Poll;
