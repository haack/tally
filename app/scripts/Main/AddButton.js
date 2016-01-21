'use strict';

var AddButton = React.createClass({
  render: function() {
    return (
      <a href="#/add"><div className="add-button">Create Poll</div></a>
    );
  }
});

module.exports = AddButton;
