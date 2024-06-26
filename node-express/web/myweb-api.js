let http = require("http");

http.createServer(function(req,res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.write('{"name": "Steve Shilling", "hobbies":["Tennis","Squash","Cooking"], "transport": "Feet"}');
	res.end();
}).listen(80);