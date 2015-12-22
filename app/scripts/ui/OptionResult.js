'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.option}:{this.props.data.count}
      </span>
    );
  }
});

module.exports = OptionResult;
