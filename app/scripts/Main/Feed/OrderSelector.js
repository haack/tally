'use strict';

var _ = require('lodash');

var Orderer = React.createClass({
  OrderOptions: {
    "Recent": {
      "field": "created_at",
      "icon": "fa fa-clock-o"
    },
    "Popular": {
      "field": "votes",
      "icon": "fa fa-arrow-up"
    },
    "Hot": {
      "field": "freshness",
      "icon": "fa fa-fire"
    }
  },

  render: function() {
    return (
      <div className="order-selector container">
        {_.map(this.OrderOptions, function(val, key) {
          return <span className="order-option col-md-4 col-xs-4" key={val.field} onClick={this.props.onSelect.bind(null, val.field)}><i className={val.icon}></i> {key}</span>
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Orderer;
