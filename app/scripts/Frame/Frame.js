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
          <div className="content col-md-6 col-md-offset-3"> 
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Frame;
