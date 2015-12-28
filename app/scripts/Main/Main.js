var Feed = require("./Feed/Feed");

//abstracted to allow stuff above feed for customising

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Feed/>
      </div>
    );
  }
});

module.exports = Main;