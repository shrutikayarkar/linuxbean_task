var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017";
module.exports.mongoCon = function(cb){
	MongoClient.connect(url, cb);
}