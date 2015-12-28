'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.option}: {this.props.data.count}
        <button onClick={this.props.vote}>+</button>
      </span>
    );
  },
});

module.exports = OptionResult;
