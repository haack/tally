var auth = {
  ref: new Firebase("https://rapidly.firebaseio.com"),

  login: function(callback) {
    this.ref.authWithOAuthPopup("facebook", function(error, authData) {
      callback(error, authData);
    });
  },

  getAuth: function() {
    return this.ref.getAuth();
  }
}

module.exports = auth;
