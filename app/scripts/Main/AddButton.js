'use strict';

var AddButton = React.createClass({
  render: function() {
    return (
      <a href="#/add"><span className="add-button"><img className="icon" src="/images/plus.png" width="30px"></img> Create Poll</span></a>
    );
  }
});

module.exports = AddButton;
