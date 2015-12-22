'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <p>{this.props.data.count}</p>
    );
  }
});

module.exports = OptionResult;
