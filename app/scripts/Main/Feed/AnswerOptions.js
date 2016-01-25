'use strict';

var _ = require("lodash"),
  OptionResult = require("./OptionResult");

var AnswerOptions = React.createClass({
  render: function() {
    return (
      <div className="answer-options">
        <ul>
          {
            _.map(this.props.options, function(value, key) {
              return <OptionResult key={key} voted={this.props.voted} vote={this.props.vote.bind(null,key)} option={key} data={value}/>;
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});

module.exports = AnswerOptions;
