//Problem: we need a simple way to look at a user's badge count and 
//				 JavaScript points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our
//					template via HTTP

//Create a web server
var router = require('./router.js');
var http = require('http');

http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(1337);
console.log("Server started at 127.0.0.1:1337");
