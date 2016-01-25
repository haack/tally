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
        <div className="input-group">
          <input className="form-control" type="text" ref="OptionValue" placeholder="New option..." />
          <span className="input-group-btn">
            <a className="btn add-option" onClick={this.addOption}><i className="fa fa-plus"></i></a>
          </span>
        </div>
      </div>
    );
  },
});

module.exports = AddOption;
