'use strict';

var _ = require('lodash');

var OptionsField = React.createClass({
  addOption: function(event) {
    var options = this.props.formData.options;
    options[event.target.value] = event.target.value;
    this.props.saveValues({options: options});
  },

  removeOption: function(event) {
    this.props.saveValues({options: _.omit(this.props.formData.options, event.target.value)});
  },

  render: function() {
    return (
      <div>
        <ol>
          {_.map(this.props.formData.options, function(val, key) {
            return <li key={key}>{key}<button value={key} onClick={this.removeOption}>-</button></li>;
          }.bind(this))}
          <button value="yes" onClick={this.addOption}>+</button>
        </ol>

        <button onClick={this.props.prevStep}>Prev</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

module.exports = OptionsField;