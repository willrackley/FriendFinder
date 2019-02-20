var path = require("path");

module.exports = function(app){

    //route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    
    //catch all route to home page
    app.get('*',function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

