'use strict';

var OptionResult = React.createClass({
  render: function() {
    var voteTick = function() {
      if (this.props.voted == this.props.option) { 
        return <i className='fa fa-check'></i>
      }
    }.bind(this);

    var voteResults = function() {
      if (this.props.voted) {
        return <span>{this.props.data.count}</span>
      }
    }.bind(this);

    return (
      <a onClick={this.props.vote}>
        <li className="option-result btn">
        {voteTick()}&nbsp;
        {this.props.option}&nbsp;
        {voteResults()}
        </li>
      </a>
    );
  },
});

module.exports = OptionResult;
