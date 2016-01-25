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
      <div className="row order-selector">
        {_.map(this.OrderOptions, function(val, key) {
          return <div className="order-option col-lg-4 col-md-4 col-xs-4 clickable" key={val.field} onClick={this.props.onSelect.bind(null, val.field)}><i className={val.icon}></i> {key}</div>
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Orderer;
