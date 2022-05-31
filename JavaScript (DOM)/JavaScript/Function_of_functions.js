function add(num1, num2){
    return num1+num2;
}
undefined
function multiply(num1, num2){
    return num1*num2;
}
undefined
function calculator(num1, num2, operator){
    return operator(num1, num2);
}
undefined
calculator(2, 3, add);
5
calculator(2, 3, multiply);
6