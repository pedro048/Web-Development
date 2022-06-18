const express = require("express");
const app = express();

/* req = request
res = response */

app.get("/", function(req, res){
    /* console.log(req); */
    res.send("<h1 style='font-size:10rem; color: red'>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: pedro@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<p style='font-size: 2rem; font-family: Montserrat;'>I am Pedro Victor a brazilian computer engineer who works with programming.</p>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Study</li><li>Code</li><li>Passion Fruit</li></ul>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});