var ReactRouter = require("react-router"),
    Frame = require("./Frame"),
    Main = require("./Main/Main"),
    Dashboard = require("./Dashboard/Dashboard");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = (
  <Router>
    <Route path="/" component={Frame}>
      <Route path="/main" component={Main} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
);