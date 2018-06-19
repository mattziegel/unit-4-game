var wins = 0;
var losses = 0;

//generates random number between, and including, 19 and 120 
var targetNumber = function getRandomIntInclusive(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#number-to-guess").text(targetNumber);
$("#wins").text(wins);
$("#losses").text(losses);

var counter = 0;
//generates random value for crystals between 1 and 12
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var incrament = numberOptions[Math.round(Math.floor())];

$(".crystal-image").on("click", function () {
    counter += incrament;
    if (counter === targetNumber) {
        alert("You Win!");
        wins++;
    }

    else if (counter >= targetNumber) {
        alert("You Lose!");
        losses++;
    }
});

// var numberOptions = function getRandomIntInclusive(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(12);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
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

// })
