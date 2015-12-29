var auth = {
  ref: new Firebase("https://rapidly.firebaseio.com"),

  login: function(callback) {
    this.ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (!error) {
        //TODO: if success, add user to FB  
      }

      callback(error, authData);
    });
  },

  logout: function() {
    this.ref.unauth();
  },

  getAuth: function() {
    return this.ref.getAuth();
  }
}

module.exports = auth;
