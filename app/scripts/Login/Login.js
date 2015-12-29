'use strict';

var Login = React.createClass({
  login: function() {
    var ref = new Firebase("https://rapidly.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) { /* Your Code */ }, {
      remember: "sessionOnly",
      scope: "email,user_likes"
    });
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
