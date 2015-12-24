'use strict';

var OptionsField = React.createClass({
  getInitialState: function() {
    return {
      options: {}
    };
  },

  handleOptionAdd: function(event) {

  },

  render: function() {
    return (
      <div>
        <button onClick={this.props.prevStep}>Prev</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

module.exports = OptionsField;