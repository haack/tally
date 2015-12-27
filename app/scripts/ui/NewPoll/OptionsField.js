'use strict';

var _ = require('lodash'),
  AddOption = require('./AddOption');

var OptionsField = React.createClass({
  addOption: function(newOption) {
    var options = this.props.formData.options;
    options[newOption] = newOption;
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
          <AddOption addCallback={this.addOption} />
        </ol>

        <button onClick={this.props.prevStep}>Prev</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

module.exports = OptionsField;