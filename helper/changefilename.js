var crypto = require("crypto");

module.exports = function(name) {
var x = crypto.randomBytes(12).toString("hex");
var arr = name.split(".");
var n = arr.length;
var ext = arr[n-1];
var newname = x+"."+ext;
return newname;
}