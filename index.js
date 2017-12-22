var express=require("express")();
express.get("/signUp",function(req,res){
	res.render("signup.ejs");
})
express.get("/",function(req,res){
	res.render("australia.ejs");
})
express.get("/success",function(req,res){
	res.render("success.ejs");
})
express.listen(2000,function(){
	console.log("it has started !!!!!!!");
})