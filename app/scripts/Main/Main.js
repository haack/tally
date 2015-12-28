var Feed = require("./Feed/Feed"),
    History = require("react-router").History;

//abstracted to allow stuff above feed for customising

var Main = React.createClass({
  mixins: [History],

  //TODO: still tries to render component later raising a warning
  componentDidMount: function() {
    if (!Auth.isLoggedIn()) {
      this.history.pushState(null, '/login');
    }
  },

  render: function() {
    return (
      <div>
        <Feed/>
      </div>
    );
  }
});

module.exports = Main;