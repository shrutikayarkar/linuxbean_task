var express = require("express");
var router = express.Router();
var user = require("../model/student");

router.get("/",function (req,res) {
	var pagedata = {title:"layout", pagename:"login/index"};
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
var u = req.body.username;
var p = req.body.password;


user.findwhere({username:u},function(err,result){
	if(result.length==0)
	{
		
		res.redirect('/login');
	}
	else
	{
		var data = result[0];
		if(data.password==p)
	{
		req.session.userid = data._id;
		req.session.fullname = data.fullname;
		req.session.is_user_logged_in = true;
		res.redirect("/user");
	}
		else
	{
		
		res.redirect("/login");
	}
	}
});

});
module.exports = router;