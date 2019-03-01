var friends = require("../data/friends");

module.exports = function(app){
   
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        
        var newUser = req.body;
        var userComparisonArray = [];
        var allFriendScores = [];
        var dataCtr = 0;
        var matchIndex = 0;
        var matchIndexArray = [];
        

        //once we have all differences from the user and a person from the friends list we then get the the total difference
        function totalDiff(array) {
            var add = (a, b) =>
                a + b
                var totalDiff = array.reduce(add);

            allFriendScores.push(totalDiff);
            console.log("all "+ allFriendScores);
            console.log(Math.min(...allFriendScores));
            var lowestDiff = Math.min(...allFriendScores);
            matchIndex = allFriendScores.indexOf(lowestDiff)
            matchIndexArray.push(matchIndex);
        }

        //this function uses a git request to get info from the friends api list
        function getFriendScores(){
            if (friends !== []) {
                if(dataCtr < friends.length){
                    userComparisonArray = [];
                    for(var i=0; i < newUser.scores.length; i++){
                        var answerDiff = Math.abs(newUser.scores[i] - friends[dataCtr].scores[i]);
                        userComparisonArray.push(answerDiff);
                    }
                    totalDiff(userComparisonArray);
                    dataCtr++;
                    getFriendScores();
                }   
            }         
        }
        
        getFriendScores();
        var finalIndex = matchIndexArray[matchIndexArray.length -1];
        var matchName = friends[finalIndex].name;
        var matchAge = friends[finalIndex].age;
        var matchLocation = friends[finalIndex].location;
        var matchImg = friends[finalIndex].photo;

        var matchModal = 
        `<div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h3 class='modal-title w-100 text-center'>FRIEND <i class="fab fa-searchengin"></i> FINDER</h3>
                </div>
                <div class="modal-body">
                    <h4 class='mb-4 text-center'>We've found a great friend for you!</h4>
                    <h3 id="modalName">${matchName}, ${matchAge}</h3> 
                    <p></p>
                    <img id="modalImg" src="${matchImg}" class="img-fluid" alt="picture of new friend">
                    <p></p>
                    <h4 id="modalLocation">${matchLocation} </h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>`

        friends.push(newUser);
        return res.send(matchModal);
    });
};

