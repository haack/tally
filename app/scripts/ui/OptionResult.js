'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.option}: {this.props.data.count}
        <button onClick={this.alertTest}>Hello</button>
      </span>
    );
  },

  alertTest: function() {
    console.log("hello");
  }
});

module.exports = OptionResult;
