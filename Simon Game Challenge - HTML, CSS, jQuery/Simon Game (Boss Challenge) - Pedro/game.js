var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).keydown(function(){   
    if(!started){
        $("#level-title").html("Level "+level);
        nextSequence();
        started=true;
    }
});

var userChosenColour;
$(".btn").click(function(event){
    userChosenColour = event.target.id; 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer();
}); 

function nextSequence(){ 
    level++;
    $("#level-title").html("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    userClickedPattern = [];
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);    
}

function playSound(name){
    var audioColour = new Audio("sounds/" + name + ".mp3");
    audioColour.play();  
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(){
    var count = 0;
    for(var i=0; i<userClickedPattern.length; i++){
        if(userClickedPattern[i] == gamePattern[i]){
            count++;
            if(count == gamePattern.length){
                setTimeout(nextSequence(), 1000);
            }
        }else{
            $("#level-title").html("Game Over, Press Any Key to Restart");
            var gameOverAudio = new Audio("sounds/wrong.mp3");
            gameOverAudio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over"); 
            }, 200);
            startOver();
        }
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




















