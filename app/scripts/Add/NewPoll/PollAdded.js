'use strict';

var PollAdded = React.createClass({
  //TODO: add spinner until submit complete
  componentWillMount: function() {
    //post to firebase
    var firebaseRef = new Firebase("https://rapidly.firebaseio.com/polls/list");
    firebaseRef.push(this.props.formData);

    firebaseRef.parent().child("count").transaction(function(count) {
      return count+1;
    });
  },

  render: function() {
    return (
      <div>Donso!</div>
    );
  },
});

module.exports = PollAdded;
