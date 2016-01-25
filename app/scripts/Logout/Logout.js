'use strict';

var History = require("react-router").History;

var Logout = React.createClass({
  mixins: [History],

  componentWillMount: function() {
    Auth.logout();
    this.history.pushState(null, '/login');
  },

  render: function() {
    return (
      <div>
        Logged out ;)
      </div>
    );
  },
});

module.exports = Logout;
