'use strict';

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <span>Tally</span>
        <i className="nav-options fa fa-chevron-circle-down pull-right"></i>
      </div>
    );
  },
});

module.exports = Navbar;
