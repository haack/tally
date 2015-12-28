var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Auth = window.Auth = require('./auth'),
    Routes = require("./routes");

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);