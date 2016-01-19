'use strict';

var PollAdded = React.createClass({
  //TODO: add spinner until submit complete
  componentWillMount: function() {
    var poll = this.props.formData;

    poll["created_at"] = Date.now();

    //post to firebase
    var firebaseRef = new Firebase(FirebaseURL + "/polls");
    
    firebaseRef.push(poll);
  },

  render: function() {
    return (
      <div>Donso!</div>
    );
  },
});

module.exports = PollAdded;
