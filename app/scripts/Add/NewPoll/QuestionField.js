'use strict';

var QuestionField = React.createClass({
  //TODO: add wrapper for nextStep to validate question value

  //TODO: get some flux in here
  handleQuestionChange: function(event) {
    this.props.saveValues({question: event.target.value});
  },

  nextStep: function() {
    var q = this.props.formData.question;
    if (q) {
      if (q.length > 5) {
        this.props.nextStep();
      }
    }
  },

  render: function() {
    return (
      <div className="input-field">
        <span className="title">Question title</span>
        <div className="input-group">
          <input className="form-control input-lg" type="text" placeholder="What do you want to ask?" defaultValue={this.props.formData.question} onChange={this.handleQuestionChange}/>
          <span className="input-group-btn">
            <button className="btn btn-primary btn-lg" type="button" onClick={this.nextStep}>Next!</button>
          </span>
        </div>
        <span>*Must be atleast 5 characters</span>
      </div>
    );
  },
});

module.exports = QuestionField;
