(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXg1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBhcXVpbGxhIG9uIDI4LjAyLjIwMTcuXHJcbiAqL1xyXG5sZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xyXG5cclxuc29ja2V0Lm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcclxuXHRhZGRNZXNzYWdlKGV2ZW50LmRhdGEpO1xyXG59O1xyXG5cclxuc29ja2V0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcblx0YWxlcnQoJ9Ch0L7QtdC00LjQvdC10L3QuNC1INC30LDQutGA0YvRgtC+INC40LvQtNC4INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtGC0LrRgNGL0YLQvicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkTWVzc2FnZShtZXNzYWdlKSB7XHJcblx0aWYgKCFtZXNzYWdlLnRyaW0oKSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bGV0IG1lc3NhZ2VJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRtZXNzYWdlSXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuXHRtZXNzYWdlSXRlbS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG5cdG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUl0ZW0pO1xyXG5cdG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKCkge1xyXG5cdGxldCBtZXNzYWdlID0gbWVzc2FnZVRleHQudmFsdWU7XHJcblxyXG5cdGlmIChzb2NrZXQucmVhZHlTdGF0ZSA9PT0gMykge1xyXG5cdFx0c29ja2V0Lm9uZXJyb3IoKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHNvY2tldC5zZW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRtZXNzYWdlVGV4dC52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5zZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZE1lc3NhZ2UpO1xyXG5tZXNzYWdlVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZW5kTWVzc2FnZSk7Il19
