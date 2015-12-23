'use strict';

var _ = require("lodash"),
  OptionResult = require("./OptionResult");

var AnswerOptions = React.createClass({
  render: function() {
    return (
      <ul>
        {_.map(this.props.options, function(value, key) {return <li key={key}><OptionResult option={key} data={value}/></li>;})}
      </ul>
    );
  }
});

module.exports = AnswerOptions;
