/*
var output = [];
output.push(1);
output.push(2);
output.push(3);
console.log(output);
output.pop();
console.log(output);
*/
var output = [];
//var count = 0;
function FizzBuzz(){
    //while(count <= 100){
    for(var count=1; count<101; count++){
        //count += 1;
        if(count % 3 == 0 && count % 5 == 0){
            output.push("FizzBuzz");
        }else if(count % 3 == 0){
            output.push("Fizz");
        }else if(count % 5 == 0){
            output.push("Buzz");
        }else{
            output.push(count);
        }   
    }
    console.log(output);
}

FizzBuzz();


