'use strict';

var PollAdded = React.createClass({
  render: function() {
    return (
      <div>Donso! {this.props.data.question} </div>
    );
  },
});

module.exports = PollAdded;
