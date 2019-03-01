

    
$("#form").submit(function(event){
    event.preventDefault(); 
    
    var userSurveyArray = [];

    //use a for loop to place the user's survey answers in an array
    for(var i=1; i < 11; i++){
        var question = "#question" + i + " :selected";
        var userChoice = $(question).text().split(" (");
        userSurveyArray.push(userChoice[0]) 
    }

    var user = {
        "name": $('#nameInput').val().trim(),
        "photo":$('#photoInput').val().trim(),
        "age": $('#ageInput').val().trim(),
        "location": $('#locationInput').val(),
        "scores":userSurveyArray
    };

    //clearing selected form values
    for(var i=0; i < 10; i++){
        var question = "#question" + (i+1);
        $(question).val('Select an Option');
    }
    $('#nameInput').val('');
    $('#photoInput').val('');
    $('#locationInput').val('');
    $('#ageInput').val('');

    

    $.post("/api/friends", user, function(data) {
        console.log("post fired")
        $('#showResult').append(data);
        $('.modal').modal('show');
    });

    $("#showResult").on("hidden.bs.modal", function () {
        window.location.href = "/";
    });
   
});

