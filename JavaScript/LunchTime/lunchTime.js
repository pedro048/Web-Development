
var names = ["Angela", "Ben", "Jonny", "Michael", "Chloe"]

function whosPaying(names){
    var numberOfPeople = names.lenght;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition]

    return randomPerson + " is going to buy lunch today!";
}

whosPaying(names);
