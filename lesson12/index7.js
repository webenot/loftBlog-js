/**
 * Created by aquilla on 28.02.2017.
 */
let worker = new Worker('worker.js');

worker.addEventListener('message', e => {
	let message = e.data.trim();

	if (message) {
		let messageItem = document.createElement('li');
		messageItem.className = 'list-group-item';
		messageItem.textContent = message;

		messageContainer.appendChild(messageItem);
		messageContainer.scrollTop = messageContainer.scrollHeight;
	}
});

function sendMessage() {
	worker.postMessage(messageText.value);

	messageText.value = '';
}

sendButton.addEventListener('click', sendMessage);
messageText.addEventListener('change', sendMessage);