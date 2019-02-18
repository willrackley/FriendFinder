var express = require("express");
var path = require("path");
var routes = require("./app/routing/htmlRoutes");

var PORT = process.env.PORT || 3000;




routes.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
