var wins = 0;
var losses = 0;
var userScore =0;

$(document).ready(function() {
    //dispalys random number each time page refreshes
    var randomNumber = Math.floor(Math.random() * 100) + 20 ;
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);
    
    //displays wins and losses 
    var userWins = "Wins: " + wins;

    $("#wins").text(userWins);

    var userLosses = "Losses: " + losses;

    $("#losses").text(userLosses);

    //display starting score 
    $("#totalScore").text(userScore);

    //gives value to each image 
    var img1 = Math.floor(Math.random() * 11) + 1;
        console.log(img1);
        $("#img1").html("<img src=" + "assets/images/crystal1.png " + " value=" + img1 + ">"); 
    
    var img2 = Math.floor(Math.random() * 11) + 1;
        console.log(img2);
        $("#img2").html("<img src=" + "assets/images/crystal2.png " + " value=" + img2 + ">");  
        
    var img3 = Math.floor(Math.random() * 11) + 1;
        console.log(img3);
        $("#img3").html("<img src=" + "assets/images/crystal3.png " + " value=" + img3 + ">"); 
    
    var img4 = Math.floor(Math.random() * 11) + 1;
        console.log(img4);
        $("#img4").html("<img src=" + "assets/images/crystal4.png " + " value=" + img4 + ">"); 

    //clears all previous scores and updates losses and wins 
    function resetGame () {
        randomNumber = Math.floor(Math.random() * 100) + 20;
        $("#randomNumber").text(randomNumber);
        console.log(randomNumber);
        userScore = 0;
        // $("#outcome").html(" ");
        img1 = Math.floor(Math.random() * 12) + 1;
        console.log(img1);
        $("#img1").html("<img src=" + "assets/images/crystal1.png " + " value=" + img1 + ">"); 

        img2 = Math.floor(Math.random() * 12) + 1;
        console.log(img2);
        $("#img2").html("<img src=" + "assets/images/crystal2.png " + " value=" + img2 + ">"); 
        
        img3 = Math.floor(Math.random() * 12) + 1;
        console.log(img3);
        $("#img3").html("<img src=" + "assets/images/crystal3.png " + " value=" + img3 + ">"); 

        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#totalScore").text(userScore);

        $("img").on ("click", function () {
            var newScore = userScore += parseInt($(this).attr("value"));
            console.log(newScore);
            $("#totalScore").html(newScore);
            var audio = new Audio('assets/shooting-star.mp3');
            audio.play();
    
            if (newScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                $("#outcome").html("<img src=" + "assets/images/win.png" + ">")
                resetGame();
            }
    
            else if (newScore > randomNumber) {
                losses++;
                $("#loses").html("Losses:" + losses);
                $("#outcome").html("<img src=" + "assets/images/game-over.gif" + ">")
                resetGame();
                // $("#outcome").on ("click", function() {
                //     resetGame();   
                // });
            }
        });
        
    };

    //on click function to get values of each image 
    $("img").on ("click", function () {
        var newScore = userScore += parseInt($(this).attr("value"));
        console.log(newScore);
        $("#totalScore").html(newScore);
        var audio = new Audio("assets/shooting-star.mp3");
            audio.play();

        if (newScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#outcome").html("<img src=" + "assets/images/win.png" + ">");
            var winaudio = new Audio("assets/win.wav");
            winaudio.play();
            resetGame();
            setTimeout( function() { $("#outcome").html(" ")}, 3000);
        }

        else if (newScore > randomNumber) {
            losses++;
            $("#loses").html("Losses:" + losses);
            $("#outcome").html("<img src=" + "assets/images/game-over.gif" + ">")
            var loseraudio = new Audio("assets/loss.wav");
            loseraudio.play();
            resetGame();
            // $("#outcome").on ("click", function() {
            //     resetGame();   
            // });
            setTimeout( function() { $("#outcome").html(" ")}, 3000);
        }
    });
    

});