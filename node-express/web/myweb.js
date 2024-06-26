let http = require("http");

http.createServer(function(req,res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello, from Node");
	res.end();
}).listen(80);