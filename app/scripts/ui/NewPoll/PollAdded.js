'use strict';

var PollAdded = React.createClass({
  render: function() {
    return (
      <div>Donso! {JSON.stringify(this.props.formData)}  </div>
    );
  },
});

module.exports = PollAdded;
