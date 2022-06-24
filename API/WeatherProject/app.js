const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8636dbe719dda5cafe918b09d7d2cd8e&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            /* console.log(data); */
           const weatherData = JSON.parse(data);
           /* console.log(weatherData); */
        /*            
            const object = {
                name: "Pedro Victor",
                FavouriteFood: "Pizza"
           }
          console.log(JSON.stringify(object));
        */
           const temp = weatherData.main.temp;
           console.log("Temperature:", temp);
           const discription = weatherData.weather[0].description;
           console.log("Discription:", discription);
           const icon = weatherData.weather[0].icon;
           const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
           /* we can only have one res.send */ 
           /* res.send("<h1 style='font-family: Montserrat; font-size: 2rem;'>The temperature in London is " + temp + " degrees Celcius. <br> The weather is currently: " + discription + "  </h1>"); */
           res.write("<p>The weather is currently " + discription + "</p>");
           res.write("<h1 style='font-family: Montserrat; font-size: 2rem;'>The temperature in London is " + temp + " degrees Celcius.</h1>");
           res.write("<img src="+ imageURL +">");
           res.send();
        });
    });
    /* res.send("Server is up and running."); */
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});