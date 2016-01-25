var Feed = require("./Feed/Feed"),
    AddButton = require("./AddButton"),
    History = require("react-router").History;

//abstracted to allow stuff above feed for customising

var Main = React.createClass({
  mixins: [History],

  //TODO: still tries to render component later raising a warning
  componentDidMount: function() {
    if (!Auth.getAuth()) {
      this.history.pushState(null, '/login');
    }
  },

  render: function() {
    return (
      <div className="main">
        <Feed />
        <AddButton/>
      </div>
    );
  }
});

module.exports = Main;