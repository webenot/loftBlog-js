(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 28.02.2017.
 */
let watchId;

function addLocation(geopos) {
	let messageItem = document.createElement('li');

	messageItem.className = 'list-group-item';
	messageItem.textContent = 'Широта: ' + geopos.coords.latitude + '; Долгота: ' + geopos.coords.longitude + '; Точность: ' + geopos.coords.accuracy;

	messageContainer.appendChild(messageItem);
	messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
}

locate.addEventListener('click', e => {
	navigator.geolocation.getCurrentPosition(addLocation, () => {
		alert('Невозможно определить местоположение!');
	});
});

watch.addEventListener('click', e => {
	if (!watchId) {
		watchId = navigator.geolocation.watchPosition(addLocation, () => {
			alert('Невозможно определить местоположение!');
		});
	}
});

unwatch.addEventListener('click', e => {
	navigator.geolocation.clearWatch(watchId);
	watchId = null;
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXg2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMjguMDIuMjAxNy5cclxuICovXHJcbmxldCB3YXRjaElkO1xyXG5cclxuZnVuY3Rpb24gYWRkTG9jYXRpb24oZ2VvcG9zKSB7XHJcblx0bGV0IG1lc3NhZ2VJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcblx0bWVzc2FnZUl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcblx0bWVzc2FnZUl0ZW0udGV4dENvbnRlbnQgPSAn0KjQuNGA0L7RgtCwOiAnICsgZ2VvcG9zLmNvb3Jkcy5sYXRpdHVkZSArICc7INCU0L7Qu9Cz0L7RgtCwOiAnICsgZ2VvcG9zLmNvb3Jkcy5sb25naXR1ZGUgKyAnOyDQotC+0YfQvdC+0YHRgtGMOiAnICsgZ2VvcG9zLmNvb3Jkcy5hY2N1cmFjeTtcclxuXHJcblx0bWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSXRlbSk7XHJcblx0bWVzc2FnZUNvbnRhaW5lci5zY3JvbGxUb3AgPSBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodCAtIG1lc3NhZ2VDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG59XHJcblxyXG5sb2NhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGFkZExvY2F0aW9uLCAoKSA9PiB7XHJcblx0XHRhbGVydCgn0J3QtdCy0L7Qt9C80L7QttC90L4g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSEnKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG53YXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdGlmICghd2F0Y2hJZCkge1xyXG5cdFx0d2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKGFkZExvY2F0aW9uLCAoKSA9PiB7XHJcblx0XHRcdGFsZXJ0KCfQndC10LLQvtC30LzQvtC20L3QviDQvtC/0YDQtdC00LXQu9C40YLRjCDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNC1IScpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuXHJcbnVud2F0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcclxuXHR3YXRjaElkID0gbnVsbDtcclxufSk7Il19
