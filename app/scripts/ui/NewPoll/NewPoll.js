'use strict';

//inspired by: https://viget.com/extend/building-a-multi-step-registration-form-with-react

var QuestionField = require('./QuestionField'),
  PollAdded = require('./PollAdded');

var NewPoll = React.createClass({
  getInitialState: function() {
    return {
      step: 1,
      formData: {}
    };
  },

  addForm: function() {
    console.debug("Adding form...");
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  prevStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  saveValues: function(data) {
    this.setState({
      formData: Object.assign({}, this.state.formData, data)
    });
  },

  render: function() {
    switch (this.state.step) {
      case 1: 
        return <QuestionField nextStep={this.nextStep} prevStep={this.prevStep} saveValues={this.saveValues}/>
      default:
        return <PollAdded data={this.state.formData} />
    }
  }
});

module.exports = NewPoll;
