
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Feed = require("./ui/Feed"),
    mountNode = document.getElementById("app");

var TallyApp = React.createClass({
  render: function() {
    return <Feed/>;
  }
});

ReactDOM.render(<TallyApp />, mountNode);