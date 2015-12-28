var NewPoll = require("./NewPoll/NewPoll");

var Add = React.createClass({
  render: function() {
    return (
      <div>
        <NewPoll/>
      </div>
    );
  }
});

module.exports = Add;