'use strict';

var Navbar = require("./Navbar");

var Frame = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="content col-lg-6 col-lg-offset-3"> 
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Frame;
