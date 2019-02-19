var path = require("path");

module.exports = function(app){

    //route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //route to obtain css file 
    app.get("/style.css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/style.css"));
    });

    //route to obtain image file 
    app.get("/friends.jpg", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/friends.jpg"));
    });

    //home page route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //catch all route to home page
    app.get('*',function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

