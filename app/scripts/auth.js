var auth = {
  ref: new Firebase(FirebaseURL),

  login: function(callback) {
    this.ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (!error) {
        this.getUserRef().set(authData);
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

  getUserRef: function() {
    return this.ref.child("users/" + this.getAuth().uid);
  }
}

module.exports = auth;
