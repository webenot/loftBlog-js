/**
 * Created by aquilla on 15.02.2017.
 */
let http = require('http'),
	hostname = 'localhost',
	url = require('url'),
	port = 7777;

http.createServer((req, res) => {
	let data = new Array(10);

	for (let i = 0; i < data.length; i++) {
		data[i] = Math.random();
	}

	res.writeHead(200, {
		'Content-Type' : 'text/javascript'
	});

	let urlData = url.parse(req.url, true),
		params = urlData.query,
		method = params.method && params.method.trim();

	if (method) {
		res.end(`${method}(${JSON.stringify(data)});`);
	} else {
		res.end('');
	}
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});