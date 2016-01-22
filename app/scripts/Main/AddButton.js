'use strict';

var AddButton = React.createClass({
  render: function() {
    return (
      <a href="#/add">
        <span className="add-button"><i className="fa fa-pencil"></i> Create Poll</span>
      </a>
    );
  }
});

module.exports = AddButton;
