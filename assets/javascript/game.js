//document ready shorthand I saw online
$(function () {
    console.log("Ready to play!");
    console.log("If you can read this, you're a cheater. That's ok, cheating is fun too.");


    //generates random number between, and including, 19 and 120 
    var targetNumber = function getRandomIntInclusive(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var targetNum = targetNumber();

    $("#number-to-guess").text(targetNum);

    //generates random number between 1 and 12 for each individual crystal
    var blue = Math.floor(Math.random() * 11 + 1);
    console.log("Blue: " + blue);
    var yellow = Math.floor(Math.random() * 11 + 1);
    console.log("Yellow: " + yellow);
    var red = Math.floor(Math.random() * 11 + 1);
    console.log("Red: " + red);
    var green = Math.floor(Math.random() * 11 + 1);
    console.log("Green: " + green);

    var wins = 0;
    var losses = 0;
    var yourScore = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total").text(yourScore);

    //resets game. targetNumber and crystal values
    function gameReset() {
        console.log("Next Round!");
        var targetNumber = function getRandomIntInclusive(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        targetNum = targetNumber();
        $("#number-to-guess").text(targetNum);

        yourScore = 0;
        $("#total").text(yourScore);

        blue = Math.floor(Math.random() * 11 + 1);
        console.log("Blue: " + blue);
        yellow = Math.floor(Math.random() * 11 + 1);
        console.log("Yellow: " + yellow);
        red = Math.floor(Math.random() * 11 + 1);
        console.log("Red: " + red);
        green = Math.floor(Math.random() * 11 + 1);
        console.log("Green: " + green);
    };

    //updates yourscore on click of each individual crystal

    $("#blue").on("click", function () {
        (yourScore = blue + yourScore);
        console.log("Target Number: " + targetNum);
        console.log("You're Score: " + yourScore);
        $("#total").text(yourScore);

        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        } else if (yourScore > targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    });

    $("#yellow").on("click", function () {
        (yourScore = yellow + yourScore);
        console.log("Target Number: " + targetNum);
        console.log("You're Score: " + yourScore);
        $("#total").text(yourScore);

        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        } else if (yourScore > targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    });

    $("#red").on("click", function () {
        (yourScore = red + yourScore);
        console.log("Target Number: " + targetNum);
        console.log("You're Score: " + yourScore);
        $("#total").text(yourScore);

        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        }
        else if (yourScore > targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    });

    $("#green").on("click", function () {
        (yourScore = green + yourScore);
        console.log("Target Number: " + targetNum);
        console.log("You're Score: " + yourScore);
        $("#total").text(yourScore);

        if (yourScore === targetNum) {
            console.log("You Win!");
            wins++;
            $("#wins").text(wins);
            gameReset();
        }

        else if (yourScore > targetNum) {
            console.log("You Lose!");
            losses++;
            $("#losses").text(losses);
            gameReset();
        };
    });

});
