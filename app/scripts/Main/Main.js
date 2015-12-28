var Feed = require("./Feed/Feed"),
    NewPoll = require("./NewPoll/NewPoll");

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Feed/>
        <NewPoll/>
      </div>
    );
  }
});

module.exports = Main;