'use strict';

var _ = require('lodash'),
  AddOption = require('./AddOption');

var OptionsField = React.createClass({
  addOption: function(newOption) {
    var options = this.props.formData.options;
    options[newOption] = newOption;
    this.props.saveValues({options: options});
  },

  removeOption: function(option) {
    this.props.saveValues({options: _.omit(this.props.formData.options, option)});
  },

  nextStep: function() {
    var options = this.props.formData.options;
    if (options) {
      if (Object.keys(options).length > 1) {
        this.props.nextStep();
      }
    }
  },

  render: function() {
    return (
      <div className="input-field">
        <span className="title">Poll options</span>
        <ol>
          {_.map(this.props.formData.options, function(val, key) {
            return (
              <li key={key}>
                {key} <a value={key} onClick={this.removeOption.bind(null, key)}><i className="fa fa-minus"></i></a>
              </li>
            );
          }.bind(this))}
          <AddOption addCallback={this.addOption} />
          <span>*Must have at least 2 options</span>
        </ol>

        <div className="options-button-group">
          <button type="button" onClick={this.props.prevStep} className="btn btn-default btn-lg">Back</button>
          <button type="button" onClick={this.nextStep} className="btn btn-default btn-lg">Create Poll!</button>
        </div>
      </div>
    );
  },
});

module.exports = OptionsField;