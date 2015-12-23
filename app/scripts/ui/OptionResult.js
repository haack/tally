'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.option}: {this.props.data.count}
        <a onClick={this.props.vote}>+</a>
      </span>
    );
  },
});

module.exports = OptionResult;
