'use strict';

var Poll = React.createClass({
  render: function() {
    return (
      <h1>
        {this.props.object.question_string}
      </h1>
    );
  }
});

module.exports = Poll;