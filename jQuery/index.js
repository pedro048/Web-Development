//$("h1").css("color","green");

$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
console.log($("h1").hasClass("margin-50"));

//$("button").text("Don't Click Me!");
$("button").html("<em>Hey</em>");
$("a").attr("href", "https://bing.com");
$("img").attr("src");
console.log($("h1").attr("class"));
/*
var size = document.querySelectorAll("button").length;
for(var i=0;i<size;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}
*/
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keydown(function(event){
    console.log(event.key);
});
/*
$(document).keydown(function(event){
    $("h1").text(event.key);
});
*/
$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
});

setTimeout(function() {
    $("h1").css("color","yellow");    
}, 100);

$("h1").before("<button>Button</button>");
$("h1").after("<button>Button</button>");
$("h1").prepend("<button>Button</button>");
$("h1").append("<button>Button</button>");

