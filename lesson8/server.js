let http = require('http'),
	hostname = 'localhost',
	port = 7777;

http.createServer((req, res) => {
	console.log('NEW REQUEST');
	let data = '';

	res.writeHead(200, {
		'Content-Type' : 'text/javascript',
		'Access-Control-Allow-Origin' : '*'
	});

	req.setEncoding('utf8');

	req.on('data', buf => {
		data = data.concat(buf);
	});

	req.on('error', () => {
		res.end('{}');
	});

	req.on('end', () => {
		data = JSON.parse(data);

		res.end(JSON.stringify(data));
	});
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});