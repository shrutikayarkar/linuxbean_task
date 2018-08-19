var express = require('express');
var routes = express.Router();

routes.use("/", require("../controller/signup"));
routes.use("/login", require("../controller/login"));
routes.use("/studentWebService", require("../controller/studentWebService"));
routes.use("/user", require("../controller/user"));
routes.use("/edit", require("../controller/edit"));


module.exports=routes;