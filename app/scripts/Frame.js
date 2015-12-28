'use strict';

var Frame = React.createClass({
  render: function() {
    return (
      <div>
        <a href="#/">/</a>&nbsp;
        <a href="#/main">main</a>&nbsp;
        <a href="#/dashboard">dashboard</a>
        <hr />
        {this.props.children}
      </div>
    );
  },
});

module.exports = Frame;
