var ReactRouter = require("react-router"),
    Frame = require("./Frame"),
    Main = require("./Main/Main"),
    Add = require("./Add/Add"),
    Dashboard = require("./Dashboard/Dashboard");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = (
  <Router>
    <Route path="/" component={Frame}>
      <Route path="/main" component={Main} />
      <Route path="/add" component={Add} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
);