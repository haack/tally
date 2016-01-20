'use strict';

var _ = require('lodash');

var Orderer = React.createClass({
  OrderOptions: {
    "recent": "created_at",
    "popularity": "votes",
    "hot": "freshness"
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
