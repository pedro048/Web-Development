const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html"); 
});

app.post("/", function(req, res){
    var weightValue = parseFloat(req.body.weight);
    var heightValue = parseFloat(req.body.height);

    var bmi = weightValue/(heightValue**2);
    
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});