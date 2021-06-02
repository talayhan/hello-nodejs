// @TODO convert to ES6
// http object carries all the public
// methods the http module lives somewhere within Nodejs provides
var http = require("http");

function onRequest(request, response) {
	console.log("Request received!")
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World!");
	response.end();
}

http.createServer(onRequest).listen(9292);

console.log("Server has started!");
