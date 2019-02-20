

    
$("#form").submit(function(event){
    event.preventDefault(); 
    
    //console.log($('.form-control')[0].validity.valid);
    
    // var questionId = "$('#question1 :selected').val() === 'Select an Option'"
    // if(questionId || $('#nameInput').val() === "" || $('#photoInput').val() === ""){
    //     alert("yo");
    //     event.preventDefault();
    //     event.stopPropagation();
    // } else {
    var userSurveyArray = [];
    var userComparisonArray = [];
    var allFriendScores = [];
    var dataCtr = 0;
    var matchIndex = 0;

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
            console.log(allFriendScores.indexOf(lowestDiff));
    }

    //this function is used to display the users friend match in the modal
    function matchDisplay(data, index){
        $("#modalName").text(data[index].name + ", " + data[index].age);
        $("#modalLocation").text("" + data[index].location);
        $("#modalImg").attr("src", data[index].photo);
        $('.modal').modal('show');
    }

    //this function uses a git request to get info from the friends api list
    function getFriendScores(){
        $.get("/api/friends", function(data) {
        
        console.log(data);
       
            if (data) {
                if(dataCtr < data.length){
                    userComparisonArray = [];
                    for(var i=0; i < userSurveyArray.length; i++){
                        answerDiff = Math.abs(userSurveyArray[i] - data[dataCtr].scores[i]);
                        userComparisonArray.push(answerDiff);
                    }
                    console.log("uCA " + userComparisonArray);
                    totalDiff(userComparisonArray);
                    dataCtr++;
                    matchDisplay(data, matchIndex);
                    getFriendScores();
                    
                    } 
                }
        });
    }

    //use a for loop to place the user's survey answers in an array
    for(var i=1; i < 11; i++){
        var question = "#question" + i + " :selected";
        var userChoice = $(question).text().split(" (");
        userSurveyArray.push(userChoice[0])
    }
    console.log(userSurveyArray);
    getFriendScores();

    //clearing selected form values
    for(var i=0; i < 10; i++){
        var question = "#question" + (i+1);
        $(question).val('Select an Option');
    }
    // }
});

//still need to add form validation

