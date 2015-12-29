'use strict';

var History = require("react-router").History;

var Logout = React.createClass({
  mixins: [History],

  componentWillMount: function() {
    if (!Auth.getAuth()) {
      this.history.pushState(null, '/login');
    } else {
      Auth.logout();
    }
  },

  render: function() {
    return (
      <div>
        Logged out :)
      </div>
    );
  },
});

module.exports = Logout;
