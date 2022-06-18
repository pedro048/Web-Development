const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    /* res.send("Hello World!"); */
    /* console.log(__dirname); */
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req, res){
    /* console.log(req.body.num1); */
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1+num2;

    /* res.send("<p style='font-size: 2rem; font-family: Montserrat;'>Thanks for posting that!</p>"); */
    res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});