'use strict';

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">Tally</a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="#/main">Main</a></li>
              <li><a href="#/add">Add</a></li>
              <li><a href="#/dashboard">Dashboard</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#/login">Login</a></li>
              <li><a href="#/logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  },
});

module.exports = Navbar;
