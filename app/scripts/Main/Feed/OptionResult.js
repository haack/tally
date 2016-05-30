'use strict';

var OptionResult = React.createClass({
  render: function() {
    var voteTick = function() {
      if (this.props.voted == this.props.option) { 
        return <i className='fa fa-check'></i>
      }
    }.bind(this);

    var voteResults = function() {
      console.log('serach:' + this.props.voted);
      if (this.props.voted !== 'Loading...') {
        return <span><span style={{color: '#AAA'}}>|</span> {(this.props.data.count) ? this.props.data.count: 0}</span>
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
