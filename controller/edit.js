var express = require("express");
var router = express.Router();
var user = require("../model/student");
var mongo = require("mongodb");
var userimage = require("../helper/changefilename");
var path = require("path");

router.get("/",function (req,res) {
	user.findwhere({_id:mongo.ObjectId(req.session.userid)},function(err,result){
	var pagedata = {title:"edit", pagename:"user/edit",update:result[0]};
	res.render("layout",pagedata);
});
});

router.post("/update",function(req,res){
console.log(req.files);
if(req.files.image)
	{
		var file = req.files.image;
		var newname = userimage(file.name);
		var filepath = path.resolve("public/images/"+newname);
		file.mv(filepath);
		req.body.image = newname;
	}
user.update({_id:mongo.ObjectId(req.session.userid)},req.body,function(err,result){
res.redirect("/user");
});
});

router.get("/remove",function(req,res){
user.remove({_id:mongo.ObjectId(req.session.userid)},function(err,result){
res.redirect("/user")
});
});


module.exports = router;