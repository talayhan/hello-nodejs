//Create its own module and use it in index.js
var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("Request received!")
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}

	http.createServer(onRequest).listen(9292);
	console.log("Server has started!");
}

exports.start = start;
