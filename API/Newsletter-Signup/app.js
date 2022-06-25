const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    /* console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email); */

    var data = {
        members: [{email_address: email, status: "subscribed", merge_fields: {FNAME: firstName, LNAME: lastName} }]
    };

    var jsonData = JSON.stringify(data);

    const url = "https://us13.api.mailchimp.com/3.0/lists/6793532de3";
    const options = {
        method: "POST",
        auth: "pedro046:e02a583fa6aa8a8a5f5975464da76190-us13"
    }

    const request = https.request(url, options, function(response){
        if(response.statusCode === 200){
           /* res.send("Successfully subscribed!");  */
            res.sendFile(__dirname + "/success.html");
        }else{
            /* res.send("There was an error with signing up, please try again!"); */
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});

/* 
API Key

e02a583fa6aa8a8a5f5975464da76190-us13 

List Id

6793532de3 

*/