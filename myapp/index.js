const express = require("express")
var app = express()
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(request,response){
    response.render("home")
})

app.listen(port, function () {
    console.log("Started application on port %d", + port)
});