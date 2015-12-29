'use strict';

var History = require("react-router").History;

var Login = React.createClass({
  mixins: [History],

  componentWillMount: function() {
    if (Auth.getAuth()) {
      this.history.pushState(null, '/main');
    }
  },

  login: function() {
    Auth.login(function(err, auth) {
      if (err) {
        console.log(err);
      } else {
        console.log(Auth.getAuth().uid);
        this.history.pushState(null, '/main');
      }
    }.bind(this));

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
