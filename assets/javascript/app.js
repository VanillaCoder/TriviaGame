//TODO: start a timer when the user hits start


//restarts the game
function restart() {
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#questionThree").hide();
    $("#next").hide();
    $("#final").hide();
    $("#restart").hide()
    $("#start").show();
    oneHidden = 0;
    twoHidden = 0;
    threeHidden = 0;
    scoreTracker = [];
    scores = 0;

}

function finalScreen(){
    if(scoreTracker.indexOf(1) === 0){
        scores++
    }
    if(scoreTracker.indexOf(3) === 1){
        scores++
    }
    if(scoreTracker.indexOf(2) === 2){
        scores++
    }
    $("#final").text("You got " + scores + " of 3 questions correct.")
}

//find user answer and pushes it to scoreCard
function score() {
    if (qOneOne != 0) {
        scoreTracker.push(qOneOne)
        next()
    }
    else if (qOneTwo != 0) {
        scoreTracker.push(qOneTwo)
        next()
    }
    else if (qOneThree != 0) {
        scoreTracker.push(qOneThree)
        next()
    }
    else {
        scoreTracker = []
        next()
    }
    console.log(scoreTracker)
}


//hide shows the correct things
function next() {
    if (oneHidden === 0) {
        $("#questionOne").show();
        oneHidden = 1;
    }
    else if (twoHidden === 0) {
        $("#questionOne").hide();
        $("#questionTwo").show();
        twoHidden = 1;
    }
    else if (threeHidden === 0) {
        $("#questionTwo").hide();
        $("#questionThree").show();
        threeHidden = 1;
    }
    else {
        $("#questionThree").hide()
        $("#final").show()
        $("#restart").show()
        $("#next").hide()
        finalScreen()
    }
}


var scores = 0;
//variables to track what is hidden 1 showing 0 not
var oneHidden = 0;
var twoHidden = 0;
var threeHidden = 0;
//hard coded right wrong answers
var scoreTracker = [];
var scoreCard = [1, 3, 2];
//values change and are recorded each next click
var qOneOne = 0;
var qOneTwo = 0;
var qOneThree = 0;


//set everything to appropriate values at start, will turn this into reset function
$("#questionOne").hide();
$("#questionTwo").hide();
$("#questionThree").hide();
$("#next").hide();
$("#final").hide();
$("#restart").hide()


//start button
$("#start").on("click", function () {
    $("#start").hide();
    next()
    $("#next").show();
})

//next button
$("#next").on("click", score)

//restart button
$("#restart").on("click", restart)



//onClicks for tracking answers
$('.qOneOne').on("click", function () {
    qOneOne = 1;
    qOneTwo = 0;
    qOneThree = 0;
    // console.log("You clicked 1.")
})
$('.qOneTwo').on("click", function () {
    qOneOne = 0;
    qOneTwo = 2;
    qOneThree = 0;
    // console.log("You clicked 2.")
})
$('.qOneThree').on("click", function () {
    qOneOne = 0;
    qOneTwo = 0;
    qOneThree = 3;
    // console.log("You clicked 3.")
})
