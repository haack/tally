var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Routes = require("./routes");

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);