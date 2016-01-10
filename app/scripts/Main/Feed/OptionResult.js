'use strict';

var OptionResult = React.createClass({
  render: function() {
    return (
      <a onClick={this.props.vote}>
        <li className="option-result btn">
        {this.props.option}&nbsp;&nbsp;<small>{this.props.data.count}</small>
        </li>
      </a>
    );
  },
});

module.exports = OptionResult;
