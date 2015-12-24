'use strict';

var PollAdded = React.createClass({
  render: function() {
    return (
      <div>Donso! {this.props.formData.question} </div>
    );
  },
});

module.exports = PollAdded;
