var express = require('express'); //import express
var firebase = require('firebase');
var app = express();

// handle HTTP Get requests
app.get('/', function (req, res){
	console.log("Get Request");
	res.send("Get Request");
	firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request'});
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

// NOTE: read and write permissions are set to false, please request to set it to true if you want to test

var config = {
	apiKey: "AIzaSyDyz8b3ADJDc2nbrTZEZVWrcAIiOByCVG0",
	authDomain: "nodejsfirebase-3feb2.firebaseapp.com",
	databaseURL: "https://nodejsfirebase-3feb2.firebaseio.com",
	projectId: "nodejsfirebase-3feb2",
	storageBucket: "nodejsfirebase-3feb2.appspot.com",
	messagingSenderId: "1003988804280",
	appId: "1:1003988804280:web:d592ce92c13f91aadaca4d",
	measurementId: "G-SDN84DT2SZ"
};

firebase.initializeApp(config);

// start server on port 8080
var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("server listening at http://%s:%s", host, port);
});
