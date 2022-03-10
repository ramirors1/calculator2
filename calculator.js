//jshint esversion:6

const express = require('express');
const app = express();

//setting up home route
app.get("/", function(request, response){
    response.send("<h1>Hello World</h1");
});


//sets up server
app.listen(3000, function() {
    console.log("Server started on port 3000");
});