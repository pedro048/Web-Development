var randPlayer1 = Math.floor(Math.random() * 6) + 1;
var randPlayer2 = Math.floor(Math.random() * 6) + 1;

switch (randPlayer1) {
    case 1:
        document.getElementById("dicee1").src = "Images/dice1.png";
        break;
    case 2:
        document.getElementById("dicee1").src = "Images/dice2.png";
        break;
    case 3:
        document.getElementById("dicee1").src = "Images/dice3.png";
        break;
    case 4:
        document.getElementById("dicee1").src = "Images/dice4.png";
        break;
    case 5:
        document.getElementById("dicee1").src = "Images/dice5.png";
        break;
    case 6:
        document.getElementById("dicee1").src = "Images/dice6.png";
        break;
}

switch (randPlayer2) {
    case 1:
        document.getElementById("dicee2").src = "Images/dice1.png";
        break;
    case 2:
        document.getElementById("dicee2").src = "Images/dice2.png";
        break;
    case 3:
        document.getElementById("dicee2").src = "Images/dice3.png";
        break;
    case 4:
        document.getElementById("dicee2").src = "Images/dice4.png";
        break;
    case 5:
        document.getElementById("dicee2").src = "Images/dice5.png";
        break;
    case 6:
        document.getElementById("dicee2").src = "Images/dice6.png";
        break;
}

if(randPlayer1 > randPlayer2){
    document.querySelector("h1").textContent = "Play 1 Wins!";
}else if(randPlayer2 > randPlayer1){
    document.querySelector("h1").textContent = "Play 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!"; 
}