/**
 * Created by aquilla on 28.02.2017.
 */
let WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port: 8080});

let connections = [];

wss.on('connection', function connection(ws) {
	console.log('New connection');
	
	connections.push(ws);
	
	ws.on('message', function incoming(message) {
		console.log('===========================');
		console.log('new message "%s"', message);
		
		connections.forEach(connection => {
			console.log('sending data to client');

			connection.send(message, e => {
				if (e) {
					connections = connections.filter(current => {
						return current !== connection;
					});
					
					console.log('close connection');
				}
			});
		});
	});

	ws.on('close', () => {
		connections = connections.filter(current => {
			return current !== ws;
		});

		console.log('close connection');
	});
});