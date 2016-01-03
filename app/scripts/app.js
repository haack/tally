// GLOBALS (need to be before requires)
window.api_version = "v1"
window.FirebaseURL = "https://rapidly.firebaseio.com/" + api_version;

var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Auth = window.Auth = require('./auth'),
    Routes = require("./routes");

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);