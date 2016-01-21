'use strict';

var AddButton = React.createClass({
  render: function() {
    return (
      <a href="#/add"><div className="add-button">Create Poll <img src="/images/plus.png" width="30px"></img></div></a>
    );
  }
});

module.exports = AddButton;
