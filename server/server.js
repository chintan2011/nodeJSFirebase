var express = require('express'); //import express
var firebase = require('firebase');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json()); // to parse HTTP request body

/*
// handle HTTP Get requests
app.get('/', function (req, res){
	console.log("HTTP Get Request");
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
});*/

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

// Fetch Instances
app.get('/', function(req, res){
	console.log("HTTP GET Request");
	
	var userReference = firebase.database().ref("/Users/");

	// Attach async callback to read the data
	userReference.on("value", 
				function(snapshot){
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
				},
				function (errorObj){
					console.log("The read failed: " + errObj.code);
					res.send("The read failed " + errObj.code);
				});
});

//Create new instance
app.put('/', function (req, res) {

	console.log("HTTP Put Request");

	var userName = req.body.UserName;
	var name = req.body.Name;
	var age = req.body.Age;

	var referencePath = '/Users/'+userName+'/';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({Name: name, Age: age}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});

//Update existing instance
app.post('/', function (req, res) {

	console.log("HTTP POST Request");

	var userName = req.body.UserName;
	var name = req.body.Name;
	var age = req.body.Age;

	var referencePath = '/Users/'+userName+'/';
	var userReference = firebase.database().ref(referencePath);
	userReference.update({Name: name, Age: age}, 
				 function(error) {
					if (error) {
						res.send("Data could not be updated." + error);
					} 
					else {
						res.send("Data updated successfully.");
					}
			    });
});

//Delete an instance
app.delete('/', function (req, res) {

	console.log("HTTP DELETE Request");
	//todo
 });
 

// start server on port 8080
var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("server listening at http://%s:%s", host, port);
});
