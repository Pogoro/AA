const express = require("express");
const cheerio = require('cheerio');
const axios = require('axios');
const mongo = require('mongodb');

// Express Init
var app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));

// MongoDB Init
var db_client = mongo.MongoClient;
const db_pass = 'GdFbEF4EQHtatTeO';
var db_url = `mongodb+srv://node:${db_pass}@cluster0.ienwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Routes
app.get("/",function(request,response){
    response.render("home")
});

app.get("/MeetingReadings.ejs",function(request,response){
    response.render("MeetingReadings")
});

app.get("/api/reflection", function(request, response){
    const reflection_url = 'https://www.aa.org/pages/en_US/daily-reflection';
    axios.get(reflection_url).then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
});

// Application
app.listen(port, function () {
    console.log("Started application on port %d", + port)
});