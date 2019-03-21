// Variables
var randomNum;
var score;
var wins = 0;
$("#win-count").text(wins);
var losses = 0;
$("#loss-count").text(losses);
var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalvalue1 = 0;
var crystalvalue2 = 0;
var crystalvalue3 = 0;
var crystalvalue4 = 0;
crystalvalue1 = numOptions[Math.floor(Math.random() * numOptions.length)];
console.log(crystalvalue1);
crystalvalue2 = numOptions[Math.floor(Math.random() * numOptions.length)];
console.log(crystalvalue2);
crystalvalue3 = numOptions[Math.floor(Math.random() * numOptions.length)];
console.log(crystalvalue3);
crystalvalue4 = numOptions[Math.floor(Math.random() * numOptions.length)];
console.log(crystalvalue4);

// Reseting game to new randomNum, new crystal values and score back to 0, but keeping wins/losses
function reset() {
        score = 0;
        $("#total-score").text(score);
        randomNum = Math.floor((Math.random() * 101) + 19);
        $("#number-bank").text(randomNum);
        crystalvalue1 = numOptions[Math.floor(Math.random() * numOptions.length)];
        console.log(crystalvalue1);
        crystalvalue2 = numOptions[Math.floor(Math.random() * numOptions.length)];
        console.log(crystalvalue2);
        crystalvalue3 = numOptions[Math.floor(Math.random() * numOptions.length)];
        console.log(crystalvalue3);
        crystalvalue4 = numOptions[Math.floor(Math.random() * numOptions.length)];
        console.log(crystalvalue4);
}
reset();

// Create on-click function for specific crystal picked to assign random value
$("#crystal-image1").on("click", function () {

        score += crystalvalue1;
        alert("Your new score is: " + score);
        $("#total-score").text(score);

        // Declaring win or lose 
        if (score === randomNum) {
                wins++;
                $("#win-count").text(wins);
                alert("Winner!");
                reset();
        } else if (score > randomNum) {
                losses++;
                $("#loss-count").text(losses);
                alert("Sorry, you lose!");
                reset();

        }

});


$("#crystal-image2").on("click", function () {

        score += crystalvalue2;
        alert("Your new score is: " + score);
        $("#total-score").text(score);

        if (score === randomNum) {
                wins++;
                $("#win-count").text(wins);
                alert("Winner!");
                reset();
        } else if (score > randomNum) {
                losses++;
                $("#loss-count").text(losses);
                alert("Sorry, you lose!");
                reset();
        }

});

$("#crystal-image3").on("click", function () {

        score += crystalvalue3;
        alert("Your new score is: " + score);
        $("#total-score").text(score);

        if (score === randomNum) {
                wins++;
                $("#win-count").text(wins);
                alert("Winner!");
                reset();
        } else if (score > randomNum) {
                losses++;
                $("#loss-count").text(losses);
                alert("Sorry, you lose!");
                reset();
        }

});

$("#crystal-image4").on("click", function () {

        score += crystalvalue4;
        alert("Your new score is: " + score);
        $("#total-score").text(score);

        if (score === randomNum) {
                wins++;
                $("#win-count").text(wins);
                alert("Winner!");
                reset();
        } else if (score > randomNum) {
                losses++;
                $("#loss-count").text(losses);
                alert("Sorry, you lose!");
                reset();
        }

})


