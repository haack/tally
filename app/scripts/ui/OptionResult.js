'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.option}: {this.props.data.count}
        <a onClick={this.alertTest}>+</a>
      </span>
    );
  },

  alertTest: function() {
    console.log("+");
  }
});

module.exports = OptionResult;
