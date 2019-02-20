var express = require("express");
//var path = require("path");
var app = express();


var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static('./app/public'));

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("Friends App listening on PORT " + PORT);
});


