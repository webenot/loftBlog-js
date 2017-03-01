(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 27.02.2017.
 */
/*
document.body.addEventListener('keyup', e => {
	content.style[e.target.dataset.rule] = e.target.value;
});*/

let defaults = {
	bgColor: '#fff',
	fColor: '#000',
	fSize: '16px'
};

document.body.addEventListener('keyup', e => {
	applyStyles();
});

button.addEventListener('click', e => {
	let url = '/' + bgColor.value + '/' + fColor.value + '/' + fSize.value;

	history.pushState({
		bgColor: bgColor.value,
		fColor: fColor.value,
		fSize: fSize.value
	}, 'new state', url);
});

window.addEventListener('popstate', e => {
	let state = e.state || defaults;

	bgColor.value = state.bgColor;
	fColor.value = state.fColor;
	fSize.value = state.fSize;

	applyStyles();
});

function applyStyles() {
	content.style.backgroundColor = bgColor.value;
	content.style.color = fColor.value;
	content.style.fontSize = fSize.value;
}

applyStyles();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYXF1aWxsYSBvbiAyNy4wMi4yMDE3LlxyXG4gKi9cclxuLypcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xyXG5cdGNvbnRlbnQuc3R5bGVbZS50YXJnZXQuZGF0YXNldC5ydWxlXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG59KTsqL1xyXG5cclxubGV0IGRlZmF1bHRzID0ge1xyXG5cdGJnQ29sb3I6ICcjZmZmJyxcclxuXHRmQ29sb3I6ICcjMDAwJyxcclxuXHRmU2l6ZTogJzE2cHgnXHJcbn07XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0YXBwbHlTdHlsZXMoKTtcclxufSk7XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRsZXQgdXJsID0gJy8nICsgYmdDb2xvci52YWx1ZSArICcvJyArIGZDb2xvci52YWx1ZSArICcvJyArIGZTaXplLnZhbHVlO1xyXG5cclxuXHRoaXN0b3J5LnB1c2hTdGF0ZSh7XHJcblx0XHRiZ0NvbG9yOiBiZ0NvbG9yLnZhbHVlLFxyXG5cdFx0ZkNvbG9yOiBmQ29sb3IudmFsdWUsXHJcblx0XHRmU2l6ZTogZlNpemUudmFsdWVcclxuXHR9LCAnbmV3IHN0YXRlJywgdXJsKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBlID0+IHtcclxuXHRsZXQgc3RhdGUgPSBlLnN0YXRlIHx8IGRlZmF1bHRzO1xyXG5cclxuXHRiZ0NvbG9yLnZhbHVlID0gc3RhdGUuYmdDb2xvcjtcclxuXHRmQ29sb3IudmFsdWUgPSBzdGF0ZS5mQ29sb3I7XHJcblx0ZlNpemUudmFsdWUgPSBzdGF0ZS5mU2l6ZTtcclxuXHJcblx0YXBwbHlTdHlsZXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVN0eWxlcygpIHtcclxuXHRjb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnQ29sb3IudmFsdWU7XHJcblx0Y29udGVudC5zdHlsZS5jb2xvciA9IGZDb2xvci52YWx1ZTtcclxuXHRjb250ZW50LnN0eWxlLmZvbnRTaXplID0gZlNpemUudmFsdWU7XHJcbn1cclxuXHJcbmFwcGx5U3R5bGVzKCk7Il19
