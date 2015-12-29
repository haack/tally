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
        this.history.pushState(null, '/main');
      }
    }.bind(this));

  },

  render: function() {
    return (
      <div className="login text-center">
        
        <span>Welcome</span><br/>
        <a className="btn btn-social btn-lg btn-facebook" onClick={this.login}>
          <span className="fa fa-facebook"></span>Sign in
        </a>
      </div>
    );
  },
});

module.exports = Login;
