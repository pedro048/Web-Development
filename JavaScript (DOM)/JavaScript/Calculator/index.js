function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

var count = 0;
var num1, num2, op;
var size = document.querySelectorAll("button").length;
for(var i=0;i<size;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        count++;
        switch(count){
            case 1:
                num1 = this.innerHTML;
                document.querySelector("h1").textContent = num1;
                break;
            case 2:
                op = this.innerHTML;
                document.querySelector("h1").textContent = num1 + " " + op;
                break;
            case 3:
                num2 = this.innerHTML;
                document.querySelector("h1").textContent = num1 + " " + op + " " + num2;
                break;
            case 4:
                if(this.innerHTML === '='){
                    var number1 = parseInt(num1);
                    var number2 = parseInt(num2);

                    switch(op){
                        case "-":
                            var operation = "sub";
                            break;
                        case "+":
                            var operation = "add";
                            break;
                        case "/":
                            var operation = "divide";
                            break;
                        case "*":
                            var operation = "multiply";
                            break;
                    }
                    var result = calculator(number1,number2,operation);

                    document.querySelector("h1").textContent = num1 + " " + op + " " + num2 + " " + " " + "=" + result.toString();
                }
                count = 0;
                document.querySelector("h1").textContent = "0";
                break;
        }
    });
}
  





