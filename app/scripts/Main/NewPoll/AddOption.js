'use strict';

var AddOption = React.createClass({
  addOption: function(event) {
    //TODO: validate
    this.props.addCallback(this.refs.OptionValue.value);
    this.refs.OptionValue.value = "";
  },

  render: function() {
    return (
      <div>
        <input type="text" ref="OptionValue" />
        <button onClick={this.addOption}>+</button>
      </div>
    );
  },
});

module.exports = AddOption;
