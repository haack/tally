'use strict';

//inspired by: https://viget.com/extend/building-a-multi-step-registration-form-with-react

var QuestionField = require('./QuestionField'),
  OptionsField = require('./OptionsField'),
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
        return <QuestionField formData={this.state.formData} nextStep={this.nextStep} prevStep={this.prevStep} saveValues={this.saveValues}/>
      case 2: 
        return <OptionsField formData={this.state.formData} nextStep={this.nextStep} prevStep={this.prevStep} saveValues={this.saveValues}/>
      default:
        return <PollAdded formData={this.state.formData} />
    }
  }
});

module.exports = NewPoll;
