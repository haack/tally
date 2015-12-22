'use strict';

var OptionResult = require("./OptionResult");

var Poll = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data.question_string}
        <OptionResult data={this.props.data.options.yes}/>
      </div>
    );
  }
});

module.exports = Poll;