'use strict';

//Note: 
//the left icon is literally to keep the title centered ha

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <a href="#/main">
          <i className="nav-icon fa fa-bar-chart pull-left"></i>
        </a>          
        <a href="#/main">
          <span>Tally</span>
        </a>
        <div className="dropdown pull-right">
          <a type="button" id="menu1" data-toggle="dropdown">
            <i className="nav-icon fa fa-chevron-circle-down pull-right"></i>
          </a>
          <ul className="dropdown-menu pull-right"aria-labelledby="menu1">
            <li><a href="#/main">Home</a></li>
            {
              (!Auth.getAuth()) ? 
                <li><a href="#/login"><i className="fa fa-sign-in"></i> Login</a></li> 
                : 
                <li><a href="#/logout"><i className="fa fa-sign-out"></i> Logout</a></li>
            }
          </ul>
        </div>
      </div>

    );
  },
});

module.exports = Navbar;
