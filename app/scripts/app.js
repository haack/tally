
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    ReactRouter = require("react-router"),
    Feed = require("./ui/Feed/Feed"),
    NewPoll = require("./ui/NewPoll/NewPoll"),
    Dashboard = require("./ui/Dashboard/Dashboard");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

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

var routes = (
  <Router>
    <Route path="/" component={TallyApp} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
  );

var mountNode = document.getElementById("app");

ReactDOM.render(routes, mountNode);