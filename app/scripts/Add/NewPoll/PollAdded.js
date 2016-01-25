'use strict';

var History = require("react-router").History;

var PollAdded = React.createClass({
  mixins: [History],

  //TODO: add spinner until submit complete
  componentWillMount: function() {
    var poll = this.props.formData;

    poll["created_at"] = Date.now();
    poll["votes"] = 0;

    //post to firebase
    var firebaseRef = new Firebase(FirebaseURL + "/polls");
    
    firebaseRef.push(poll);
    this.history.pushState(null, '/main');
  },

  render: function() {
    return (
      <div></div>
    );
  },
});

module.exports = PollAdded;
