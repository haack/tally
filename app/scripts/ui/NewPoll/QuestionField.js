'use strict';

var Example = React.createClass({
  getInitialState: function() {
    return {
      question: ""
    };
  },

  //TODO: get some flux in here
  handleQuestionChange: function(event) {
    this.setState({
      question: event.target.value
    });

    this.props.saveValues({question: event.target.value});
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this.handleQuestionChange}/>
        <button onClick={this.props.prevStep}>Prev</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

module.exports = Example;
