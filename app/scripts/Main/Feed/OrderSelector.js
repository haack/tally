'use strict';

var _ = require('lodash');

var Orderer = React.createClass({
  OrderOptions: {
    "Recent": "created_at",
    "Popular": "votes",
    "Hot": "freshness"
  },

  render: function() {
    return (
      <div>
        {_.map(this.OrderOptions, function(key, val) {
          return <span key={key} onClick={this.props.onSelect.bind(null, key)}>{val}</span>
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Orderer;
