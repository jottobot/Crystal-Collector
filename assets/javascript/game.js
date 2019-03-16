// Variables
var randomNum = Math.floor((Math.random() * 101) + 19);
    console.log(randomNum);
    $("#number-bank").text(randomNum);
var score = 0;
    $("#total-score").text(score);
var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalvalue1 = numOptions[Math.floor(Math.random() * numOptions.length)];
    console.log(crystalvalue1);
var crystalvalue2 = numOptions[Math.floor(Math.random() * numOptions.length)];
    console.log(crystalvalue2);
var crystalvalue3 = numOptions[Math.floor(Math.random() * numOptions.length)];
    console.log(crystalvalue3);
var crystalvalue4 = numOptions[Math.floor(Math.random() * numOptions.length)];
    console.log(crystalvalue4);

// Create on-click function for specific crystal picked to assign random value
$("#crystal-image1").on("click", function() {
 
        score += crystalvalue1;
        alert("Your score is: " + score);
        $("#total-score").text(score);
    
});


$("#crystal-image2").on("click", function() {

        score += crystalvalue2;
        alert("Your score is: " + score);
        $("#total-score").text(score);
    
});

$("#crystal-image3").on("click", function() {

        score += crystalvalue3;
        alert("Your score is: " + score);
        $("#total-score").text(score);

});

$("#crystal-image4").on("click", function() {

        score += crystalvalue4;
        alert("Your score is: " + score);
        $("#total-score").text(score);
    
})

// If score = randomNum then user wins, if score goes over user loses
if ( $(score === randomNum)) {
    alert("Winner!");
} else if ($(score > randomNum)) {
    alert("Sorry, you lose!");
    console.log(score>randomNum)
};

// Add to wins and losses counter accordingly 
// Game is over, reset all counters
// Change randomNum when new game is started