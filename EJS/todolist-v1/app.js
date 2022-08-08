const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    /*
    if (currentDay == 6 || currentDay == 0){ 
        //res.send("<h1 style='color: green;'>Yay it's the weekend!</h1>");
        
        //res.write("<h1 style='color: green;'>Yay it's the weekend!</h1>");
        //res.write("<p>It is the weekend!</p>");
        //res.send();
        
        day = "Weekend";
    }else{
        //res.send("<h1 style='color: red;'>Boo! I have to work!</h1>");
        
        //res.write("<h1 style='color: red;'>Boo! I have to work!</h1>");
        //res.write("<p>It is not the weekend</p>");
        //res.send();
        
        //res.sendFile(__dirname + "/index.html"); 
        day = "Weekday";
    }
    */
    switch(currentDay){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;  
        default:
        console.log("Error: current day is equal to: " + currentDay);              
       }
    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});