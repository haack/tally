
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Feed = require("./ui/Feed/Feed"),
    NewPoll = require("./ui/NewPoll/NewPoll"),
    mountNode = document.getElementById("app");

var TallyApp = React.createClass({
  render: function() {
    return (
      <div>
        <Feed/>
        <NewPoll/>
      </div>
      );
  }
});

ReactDOM.render(<TallyApp />, mountNode);