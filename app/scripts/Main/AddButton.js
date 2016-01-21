'use strict';

var AddButton = React.createClass({
  render: function() {
    return (
      <a href="#/add"><div className="add-button"><img className="icon" src="/images/plus.png" width="30px"></img> Create Poll</div></a>
    );
  }
});

module.exports = AddButton;
