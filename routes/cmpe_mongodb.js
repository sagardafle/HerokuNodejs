var fs = require("fs");
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://ec2-52-36-58-189.us-west-2.compute.amazonaws.com:27017,ec2-52-40-92-106.us-west-2.compute.amazonaws.com:27017,ec2-52-40-53-118.us-west-2.compute.amazonaws.com:27017/test?w=0&readPreference=secondary";

function getData(req, res) {
	MongoClient.connect(url, function(err, db) {
			var cursor = db.collection('mycol').find();
			cursor.each(function(err, doc) {	
				  if (doc != null) {
					  console.log("key is "+doc.key);
				  }
			});			
	});
}

exports.getData = getData;