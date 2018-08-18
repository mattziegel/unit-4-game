//document ready shorthand I saw online
$(function () {
    console.log("ready!");


    //generates random number between, and including, 19 and 120 
    var targetNumber = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var targetNum = targetNumber();

    $("#number-to-guess").text(targetNum);

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
    $("#total").text(yourScore);

    //resets game. targetNumber and crystal values
    function gameReset() {
        var targetNumber = function getRandomIntInclusive(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var targetNum = targetNumber();

        $("#number-to-guess").text(targetNum);

        blue = Math.floor(Math.random() * 11 + 1);
        console.log(blue);
        yellow = Math.floor(Math.random() * 11 + 1);
        console.log(yellow);
        red = Math.floor(Math.random() * 11 + 1);
        console.log(red);
        green = Math.floor(Math.random() * 11 + 1);
        console.log(green);

        yourScore = 0;
        $("#total").text(yourScore);
    }


    //updates yourscore on click of each individual crystal
    $("#blue").on("click", function () {
        (yourScore = blue + yourScore);
        $("#total").text(yourScore);
        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        } else if (yourScore >= targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    })

    $("#yellow").on("click", function () {
        (yourScore = yellow + yourScore);
        $("#total").text(yourScore);
        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        } else if (yourScore >= targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    })

    $("#red").on("click", function () {
        (yourScore = red + yourScore);
        $("#total").text(yourScore);
        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        }

        else if (yourScore >= targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    })

    $("#green").on("click", function () {
        (yourScore = yourScore + green);
        $("#total").text(yourScore);
        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        }

        else if (yourScore >= targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };

    })

});
