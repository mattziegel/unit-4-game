//document ready shorthand I saw online
$(function() {
    console.log( "ready!" );


//generates random number between, and including, 19 and 120 
var targetNumber = function getRandomIntInclusive(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#number-to-guess").text(targetNumber);

//generates random number between 1 and 12 for each individual crystal
var blue = Math.floor(Math.random() * 11 + 1);
console.log(blue);
var yellow = Math.floor(Math.random() * 11 + 1);
console.log(yellow);
var red = Math.floor(Math.random() * 11 + 1);
console.log(red);
var green = Math.floor(Math.random() * 11 + 1);
console.log(green);

var wins = 0;
var losses = 0;
var yourScore = 0;

$("#wins").text(wins);
$("#losses").text(losses);

//resets game. targetNumber and crystal values
function gameReset() {
    targetNumber = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    blue = Math.floor(Math.random() * 11 + 1);
    yellow = Math.floor(Math.random() * 11 + 1);
    red = Math.floor(Math.random() * 11 + 1);
    green = Math.floor(Math.random() * 11 + 1);

    yourScore = 0;
}

//updates yourscore on click of each individual crystal
$("#blue").on("click", function () {
    (yourScore = blue + yourScore);
    $("#total").text(yourScore);
})

$("#yellow").on("click", function () {
    (yourScore = yellow + yourScore);
    $("#total").text(yourScore);
})

$("#red").on("click", function () {
    (yourScore = red + yourScore);
    $("#total").text(yourScore);
})

$("#green").on("click", function () {
    (yourScore = yourScore + green);
    $("#total").text(yourScore);
})

//conditional statements for winning (matching target number) and losing (exceeding target number)
if (yourScore === targetNumber) {
    console.log("You Win!");
    wins++;
    gameReset();
}

else if (yourScore >= targetNumber) {
    console.log("You Lose!");
    losses++;
    gameReset();
}

});

//Commented out failed attempts:

// var numberOptions = function getRandomIntInclusive(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(12);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (var i = 0; i < numberOptions.length[Math.round(Math.floor())]; i++) {
//     var blue = $("<img>");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
// }


// for (var i = 0; i <numberOptions; i++) {
//     var imageCrystal = $(".crystal-image");
//     imageCrystal.attr("data-crystalvalue", numberOptions [i])
// }

// $("#crystal-image").on("click", function() {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;

//     if (counter === targetNumber) {
//         alert("You Win!");
//         wins++;
//     }

//     else if (counter >= targetNumber) {
//         alert("You Lose!");
//         losses++;
//     }

// }
