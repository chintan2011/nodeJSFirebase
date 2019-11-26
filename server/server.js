var express = require('express'); //import express
var app = express();

// handle HTTP Get requests
app.get('/', function (req, res){
	console.log("Get Request");
	res.send("Get Request");
});

app.put('/', function (req, res){
	console.log("HTTP PUT Request");
	res.send("HTTP PUT Request");
});

app.post('/', function (req, res){
	console.log("HTTP POST Request");
	res.send("HTTP POST Request");
});

app.delete('/', function (req, res){
	console.log("HTTP DELETE Request");
	res.send("HTTP DELETE Request");
});

// initialize firebase
var firebase = require('firebase');
var config = {
	apiKey: "APIKEY",
	authDomain: "AUTHDOMAIN",
	databaseURL: "TESTURL",
	projectId: "PROJECTID",
	storageBucket: "PROJECTBUCKET",
	messagingSenderId: "ID"
};

firebase.initializeApp(config);

// start server on port 8080
var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("server listening at http://%s:%s", host, port);
});
