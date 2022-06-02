var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var userChosenColour;
$(".btn").click(function(event){
    userChosenColour = event.target.id; 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
}); 

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
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
}

nextSequence();













