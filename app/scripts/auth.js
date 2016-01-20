var auth = {
  ref: new Firebase(FirebaseURL),

  login: function(callback) {
    this.ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (!error) {
        this.ref.child(this.getUserUrl()).set(authData);
      }

      callback(error, authData);
    }.bind(this));
  },

  logout: function() {
    this.ref.unauth();
  },

  getAuth: function() {
    return this.ref.getAuth();
  },

  getUserUrl: function() {
    return "users/" + this.getAuth().uid;
  }
}

module.exports = auth;
