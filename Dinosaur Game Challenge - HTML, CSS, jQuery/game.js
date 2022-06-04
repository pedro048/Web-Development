var started = false;
var level = 0;

$(document).keydown(function(){
    if(!started){
        gameLogic();
        started = true;
        $(".title").text("Level "+level);
    }
});

function gameLogic(){
    playGameAudio();
    $(".plant1").slideToggle("slow"); 
}

function playGameAudio(){
    gameAudio = new Audio("sound/Game-song.mp3");
    gameAudio.play();
}