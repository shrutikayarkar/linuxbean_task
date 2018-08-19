var connect = require("../config/connect");

module.exports.find=function(cb){
	connect.mongoCon(function(err, client){
		var db = client.db('tss_11');
		db.collection('student').find().toArray(cb);
	});
}
module.exports.insert=function(obj, cb){
	connect.mongoCon(function(err, client){
		var db = client.db('tss_11');
		db.collection('student').insert(obj, cb);
	});
}
module.exports.remove=function(where, cb){
	connect.mongoCon(function(err, client){
		var db = client.db('tss_11');
		db.collection('student').remove(where, cb);
	});
}
module.exports.update=function(where, obj, cb){
	connect.mongoCon(function(err, client){
		var db = client.db('tss_11');
		db.collection('student').update(where, {$set : obj}, cb);
	});
}

module.exports.findwhere=function(obj, cb){
	connect.mongoCon(function(err, client){
		var db = client.db('tss_11');
		db.collection('student').find(obj).toArray(cb);
	});
}