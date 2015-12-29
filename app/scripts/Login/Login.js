'use strict';

var History = require("react-router").History;

var Login = React.createClass({
  mixins: [History],

  login: function() {
    Auth.login(function(err, auth) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success: " + auth);
      }
    });

    this.history.pushState(null, '/main');
  },

  render: function() {
    return (
      <div>
        Login page
        <button onClick={this.login}>FB</button>
      </div>
    );
  },
});

module.exports = Login;
