'use strict';

var Frame = React.createClass({
  render: function() {
    return (
      <div>
        <a href="#/">/</a>&nbsp;
        <a href="#/login">Login</a>&nbsp;
        <a href="#/main">Main</a>&nbsp;
        <a href="#/add">Add</a>&nbsp;
        <a href="#/dashboard">Dashboard</a>&nbsp;
        <a href="#/logout">Logout</a>
        <hr />
        {this.props.children}
      </div>
    );
  },
});

module.exports = Frame;
