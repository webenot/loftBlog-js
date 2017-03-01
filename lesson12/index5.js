/**
 * Created by aquilla on 28.02.2017.
 */
let socket = new WebSocket('ws://localhost:8080');

socket.onmessage = event => {
	addMessage(event.data);
};

socket.onerror = () => {
	alert('Соединение закрыто илди не может быть открыто');
};

function addMessage(message) {
	if (!message.trim()) {
		return;
	}

	let messageItem = document.createElement('li');
	messageItem.className = 'list-group-item';
	messageItem.textContent = message;

	messageContainer.appendChild(messageItem);
	messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
	let message = messageText.value;

	if (socket.readyState === 3) {
		socket.onerror();
		return;
	}

	socket.send(message);

	messageText.value = '';
}

sendButton.addEventListener('click', sendMessage);
messageText.addEventListener('change', sendMessage);