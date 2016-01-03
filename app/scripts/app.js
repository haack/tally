// GLOBALS (need to be before requires)

window.api_version = "v0" //update this on breaking api changes, TODO: reset on launch
window.FirebaseURL = "https://tallyapp.firebaseio.com/" + api_version;

var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Auth = window.Auth = require('./auth'),
    Routes = require("./routes");

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);