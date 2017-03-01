/**
 * Created by aquilla on 28.02.2017.
 */
let socket = new WebSocket('ws://localhost:8080');

socket.onmessage = function (event) {
	postMessage(event.data);
};

socket.onerror = () => {
	throw new Error('Соединение закрыто илди не может быть открыто');
};

self.addEventListener('message', e => {
	socket.send(e.data);
});