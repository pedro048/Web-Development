var number1 = [];
var number2 = [];
var displayNumber1;
var displayNumber2;
var displayResult;
var operation;
var aux = false;

$(".btnNum").click(function(event){
    if(!aux){
        animation(event.target.id);
        number1.push(event.target.id);
        displayNumber1 = number1.join('');
        $(".visor-result").text(displayNumber1);
        playSound();
    }else{
        animation(event.target.id);
        number2.push(event.target.id);
        displayNumber2 = number2.join('');
        $(".visor-result").text(displayNumber2);
        playSound();
    }    
});

$(".bOperation").click(function(event){
    aux = true;
    playSound();
    animation(event.target.id);
    switch(event.target.id){
        case "minus":
            $(".visor-result").text("-");
            operation = "-";
            break;
        case "mult":
            $(".visor-result").text("*");
            operation = "*";
            break;
        case "divide":
            $(".visor-result").text("/");
            operation = "/";
            break;
        case "plus":
            $(".visor-result").text("+");
            operation = "+";
            break;
        case "equal":
            $(".visor-result").text("=");
            setTimeout(function(){
                switch(operation){
                    case "-":
                        displayResult = displayNumber1 - displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = []; 
                        break;
                    case "*":
                        displayResult = displayNumber1 * displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = [];
                        break;
                    case "/":
                        displayResult = displayNumber1 / displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = []; 
                        break;
                    case "+":
                        displayResult = parseInt(displayNumber1) + parseInt(displayNumber2);
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = [];
                        break;                                                
                }
            }, 200);
            break;
        case "clean":
            number1 = [];
            number2 = [];
            $(".visor-result").text("");
            aux = false;
            break;            
    }
});

$(document).keydown(function(event){
    console.log(event.which);
    if(!aux){
        playSound();
        switch(event.which){
            case 49:
                animation("1");
                number1.push("1");
                keyDisplayNumber1();
                break;
            case 50:
                animation("2");
                number1.push("2");
                keyDisplayNumber1();
                break;
            case 51:
                animation("3");
                number1.push("3");
                keyDisplayNumber1();
                break;
            case 52:
                animation("4");
                number1.push("4");
                keyDisplayNumber1();
                break;
            case 53:
                animation("5");
                number1.push("5");
                keyDisplayNumber1();
                break;
            case 54:
                animation("6");
                number1.push("6");
                keyDisplayNumber1();
                break;
            case 55:
                animation("7");
                number1.push("7");
                keyDisplayNumber1();
                break;
            case 56:
                animation("8");
                number1.push("8");
                keyDisplayNumber1();
                break;
            case 57:
                animation("9");
                number1.push("9");
                keyDisplayNumber1();
                break;
            case 48:
                animation("0");
                number1.push("0");
                keyDisplayNumber1();
                break;
        }
    }else{
        playSound();
        switch(event.which){
            case 49:
                animation("1");
                number2.push("1");
                keyDisplayNumber2();
                break;
            case 50:
                animation("2");
                number2.push("2");
                keyDisplayNumber2();
                break;
            case 51:
                animation("3");
                number2.push("3");
                keyDisplayNumber2();
                break;
            case 52:
                animation("4");
                number2.push("4");
                keyDisplayNumber2();
                break;
            case 53:
                animation("5");
                number2.push("5");
                keyDisplayNumber2();
                break;
            case 54:
                animation("6");
                number2.push("6");
                keyDisplayNumber2();
                break;
            case 55:
                animation("7");
                number2.push("7");
                keyDisplayNumber2();
                break;
            case 56:
                animation("8");
                number2.push("8");
                keyDisplayNumber2();
                break;
            case 57:
                animation("9");
                number2.push("9");
                keyDisplayNumber2();
                break;
            case 48:
                animation("0");
                number2.push("0");
                keyDisplayNumber2();
                break;
       }
    }
    switch(event.which){
        case 189: // -
            aux = true;
            playSound();
            animation("minus");
            $(".visor-result").text("-");
            operation = "-";
            break;
        case 191: // /
            aux = true;
            playSound();
            animation("divide");
            $(".visor-result").text("/");
            operation = "/";
            break;
        case 107: // +
            aux = true;
            playSound();
            animation("plus");
            $(".visor-result").text("+");
            operation = "+";
            break;
        case 106:
            aux = true;
            playSound();
            animation("equal");
            break;
        case 187: // =
            aux = true;
            playSound();
            animation("equal");
            $(".visor-result").text("=");
            setTimeout(function(){
                switch(operation){
                    case "-":
                        displayResult = displayNumber1 - displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = []; 
                        break;
                    case "*":
                        displayResult = displayNumber1 * displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = [];
                        break;
                    case "/":
                        displayResult = displayNumber1 / displayNumber2;
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = []; 
                        break;
                    case "+":
                        displayResult = parseInt(displayNumber1) + parseInt(displayNumber2);
                        $(".visor-result").text(displayResult);
                        displayNumber1 = displayResult;
                        number2 = [];
                        break;                                                
                }
            }, 200);
            break; 
        case 8: // del
            number1 = [];
            number2 = [];
            $(".visor-result").text("");
            aux = false;
            break;
    } 
});

function playSound(){
    var audioKey = new Audio("sound/keyPressed.mp3");
    audioKey.play();
}

function animation(selButton){
    $("#"+selButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function keyDisplayNumber1(){
    displayNumber1 = number1.join('');
    $(".visor-result").text(displayNumber1);
}

function keyDisplayNumber2(){
    displayNumber2 = number2.join('');
    $(".visor-result").text(displayNumber2);
}





