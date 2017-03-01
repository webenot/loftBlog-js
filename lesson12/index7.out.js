(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXg3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBhcXVpbGxhIG9uIDI4LjAyLjIwMTcuXHJcbiAqL1xyXG5sZXQgd29ya2VyID0gbmV3IFdvcmtlcignd29ya2VyLmpzJyk7XHJcblxyXG53b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGUgPT4ge1xyXG5cdGxldCBtZXNzYWdlID0gZS5kYXRhLnRyaW0oKTtcclxuXHJcblx0aWYgKG1lc3NhZ2UpIHtcclxuXHRcdGxldCBtZXNzYWdlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRtZXNzYWdlSXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuXHRcdG1lc3NhZ2VJdGVtLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcblx0XHRtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJdGVtKTtcclxuXHRcdG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcblx0fVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKCkge1xyXG5cdHdvcmtlci5wb3N0TWVzc2FnZShtZXNzYWdlVGV4dC52YWx1ZSk7XHJcblxyXG5cdG1lc3NhZ2VUZXh0LnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbnNlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kTWVzc2FnZSk7XHJcbm1lc3NhZ2VUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbmRNZXNzYWdlKTsiXX0=
