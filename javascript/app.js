const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
});
app.get("/feedback",function(req,res){
    res.render("feedback");
});
app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("server connected");
});