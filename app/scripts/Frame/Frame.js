'use strict';

var Navbar = require("./Navbar");

var Frame = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  },
});

module.exports = Frame;
