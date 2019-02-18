var express = require("express");
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var surveyRoute = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

var defaultRoute = app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;
module.exports = surveyRoute;
module.exports = defaultRoute;