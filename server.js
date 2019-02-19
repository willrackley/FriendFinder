var express = require("express");
var path = require("path");
var app = express();

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);


var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


