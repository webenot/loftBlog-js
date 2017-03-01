(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 28.02.2017.
 */
let file,
	fileReader = new FileReader(),
	chunkSize = 1024,
	chunkCount,
	lastEndByte = 0;

function loadNextChunk() {
	let currentChunkSize = lastEndByte + chunkSize > file.size ? file.size - lastEndByte : chunkSize,
		blob = file.slice(lastEndByte, lastEndByte + currentChunkSize);

	fileReader.readAsText(blob);

	lastEndByte += currentChunkSize;
	console.log(lastEndByte);
	inProgress.textContent = 'Загружено ' + parseInt(100 / chunkCount * (file.size < chunkSize ? 1 : lastEndByte / chunkSize)) + '%';
}

fileReader.addEventListener('load', e => {


	//TODO отправка данных на сервер
	content.textContent += e.target.result;
	if (lastEndByte < file.size) {
		loadNextChunk();
	}
});

photoInput.addEventListener('change', e => {
	file = e.target.files[0];
	console.log(file);
	chunkCount = file.size < chunkSize ? 1 : file.size / chunkSize;
	lastEndByte = 0;

	loadNextChunk();
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXg0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBhcXVpbGxhIG9uIDI4LjAyLjIwMTcuXHJcbiAqL1xyXG5sZXQgZmlsZSxcclxuXHRmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuXHRjaHVua1NpemUgPSAxMDI0LFxyXG5cdGNodW5rQ291bnQsXHJcblx0bGFzdEVuZEJ5dGUgPSAwO1xyXG5cclxuZnVuY3Rpb24gbG9hZE5leHRDaHVuaygpIHtcclxuXHRsZXQgY3VycmVudENodW5rU2l6ZSA9IGxhc3RFbmRCeXRlICsgY2h1bmtTaXplID4gZmlsZS5zaXplID8gZmlsZS5zaXplIC0gbGFzdEVuZEJ5dGUgOiBjaHVua1NpemUsXHJcblx0XHRibG9iID0gZmlsZS5zbGljZShsYXN0RW5kQnl0ZSwgbGFzdEVuZEJ5dGUgKyBjdXJyZW50Q2h1bmtTaXplKTtcclxuXHJcblx0ZmlsZVJlYWRlci5yZWFkQXNUZXh0KGJsb2IpO1xyXG5cclxuXHRsYXN0RW5kQnl0ZSArPSBjdXJyZW50Q2h1bmtTaXplO1xyXG5cdGNvbnNvbGUubG9nKGxhc3RFbmRCeXRlKTtcclxuXHRpblByb2dyZXNzLnRleHRDb250ZW50ID0gJ9CX0LDQs9GA0YPQttC10L3QviAnICsgcGFyc2VJbnQoMTAwIC8gY2h1bmtDb3VudCAqIChmaWxlLnNpemUgPCBjaHVua1NpemUgPyAxIDogbGFzdEVuZEJ5dGUgLyBjaHVua1NpemUpKSArICclJztcclxufVxyXG5cclxuZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XHJcblxyXG5cclxuXHQvL1RPRE8g0L7RgtC/0YDQsNCy0LrQsCDQtNCw0L3QvdGL0YUg0L3QsCDRgdC10YDQstC10YBcclxuXHRjb250ZW50LnRleHRDb250ZW50ICs9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRpZiAobGFzdEVuZEJ5dGUgPCBmaWxlLnNpemUpIHtcclxuXHRcdGxvYWROZXh0Q2h1bmsoKTtcclxuXHR9XHJcbn0pO1xyXG5cclxucGhvdG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuXHRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblx0Y29uc29sZS5sb2coZmlsZSk7XHJcblx0Y2h1bmtDb3VudCA9IGZpbGUuc2l6ZSA8IGNodW5rU2l6ZSA/IDEgOiBmaWxlLnNpemUgLyBjaHVua1NpemU7XHJcblx0bGFzdEVuZEJ5dGUgPSAwO1xyXG5cclxuXHRsb2FkTmV4dENodW5rKCk7XHJcbn0pOyJdfQ==
