document;
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;
document.firstElementChild.lastElementChild;
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good bye";
heading.style.color = "red";

document.querySelector("h1").innerHTML = "Estudando";
document.querySelector("h1").style.color = "blue";
document.querySelector("input").click();
document.querySelector("ul").lastElementChild.innerHTML = "Pedro Victor";
//document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Pedro Victor";
document.getElementsByTagName("li");
document.getElementsByTagName("li")[1].style.color = "red";
var number = document.getElementsByTagName("li").length;
console.log(number);
document.getElementsByClassName("First_Button")[0].style.color = "white";
document.getElementById("title").innerHTML = "Good Bye";
document.querySelector(".link").style.color = "red";
document.querySelector(".First_Button").style.backgroundColor = "yellow";
document.querySelector(".First_Button").style.color = "black";
/*
var aux_p = 1;
if (aux_p === 0){
    document.querySelector("button").classList.add("invisibility");
}else{
    document.querySelector("button").classList.remove("invisibility");
}
*/
document.querySelector("button").classList.add("invisibility");
document.querySelector("button").classList.toggle("invisibility");
document.querySelector("button").classList.toggle("invisibility");
document.querySelector("button").classList.toggle("invisibility");
document.querySelector("button").classList.toggle("invisibility");
document.querySelector("button").classList.toggle("invisibility");

document.querySelector("h1").classList.add("huge");


