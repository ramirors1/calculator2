//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//setting up home route
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

//callback function, what is returned when user clicks button
app.post("/", function(req, res) {

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;

    res.send("The result of the calculation is " + result)
});

//sets up server
app.listen(3000, function() {
    console.log("Server started on port 3000");
});