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

app.get("/meetings.ejs",function(request,response){
    response.render("meetings")
});

app.get("/bigbook.ejs",function(request,response){
    response.render("bigbook")
});

app.get("/stepsTraditions.ejs",function(request,response){
    response.render("stepsTraditions")
});

app.get("/service.ejs",function(request,response){
    response.render("service")
});


app.get("/reflection", function(request, response){
    // Returns a json containing the daily reflection
    const reflection_url = 'https://www.aa.org/pages/en_US/daily-reflection';
    axios.get(reflection_url).then(res => {
        const $ = cheerio.load(res.data);
        
        var data_title = $('.daily-reflection-header-title').text();
        var data_quote = $('.daily-reflection-header-content p').text();
        var data_citation = $('.daily-reflection-content-title').text();
        var data_content = $('.daily-reflection-content').text();

        var data = {
            title: data_title,
            quote: data_quote,
            quote_citation: data_citation,
            content: data_content
        };

        response.render('reflection', data);
    })
    .catch(e => {
        console.log(e);
    })
});

// Application
app.listen(port, function () {
    console.log("Started application on port %d", + port)
});