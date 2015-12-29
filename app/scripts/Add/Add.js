var NewPoll = require("./NewPoll/NewPoll"),
    History = require("react-router").History;

var Add = React.createClass({
  mixins: [History],

  //TODO: still tries to render component later raising a warning
  componentDidMount: function() {
    if (!Auth.getAuth()) {
      this.history.pushState(null, '/login');
    }
  },

  render: function() {
    return (
      <div>
        <NewPoll/>
      </div>
    );
  }
});

module.exports = Add;