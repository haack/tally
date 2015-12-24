'use strict';

var NewPoll = React.createClass({
  getInitialState: function() {
    return {
      step: 1
    };
  },

  addForm: function() {
    console.debug("Adding form...");
  },

  render: function() {
    return (
      <div>
        New Poll form:

        <button onClick={this.addForm}></button>
      </div>
    );
  },
});

module.exports = NewPoll;
