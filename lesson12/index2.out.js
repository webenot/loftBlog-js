(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 27.02.2017.
 */

let storage = localStorage;

save.addEventListener('click', e => {
	storage.data = JSON.stringify({
		myName: myName.value,
		bday: bday.value,
		about: about.value
	});
});

load.addEventListener('click', e => {
	let data = JSON.parse(storage.data || '{}');

	myName.value = data.myName || '';
	bday.value = data.bday || '';
	about.value = data.about || '';
});

isSessionStorage.addEventListener('change', e => {
	storage = isSessionStorage.checked ? sessionStorage : localStorage;
});

console.log(storage);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTIvaW5kZXgyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGFxdWlsbGEgb24gMjcuMDIuMjAxNy5cclxuICovXHJcblxyXG5sZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcclxuXHJcbnNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRzdG9yYWdlLmRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRteU5hbWU6IG15TmFtZS52YWx1ZSxcclxuXHRcdGJkYXk6IGJkYXkudmFsdWUsXHJcblx0XHRhYm91dDogYWJvdXQudmFsdWVcclxuXHR9KTtcclxufSk7XHJcblxyXG5sb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2UuZGF0YSB8fCAne30nKTtcclxuXHJcblx0bXlOYW1lLnZhbHVlID0gZGF0YS5teU5hbWUgfHwgJyc7XHJcblx0YmRheS52YWx1ZSA9IGRhdGEuYmRheSB8fCAnJztcclxuXHRhYm91dC52YWx1ZSA9IGRhdGEuYWJvdXQgfHwgJyc7XHJcbn0pO1xyXG5cclxuaXNTZXNzaW9uU3RvcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuXHRzdG9yYWdlID0gaXNTZXNzaW9uU3RvcmFnZS5jaGVja2VkID8gc2Vzc2lvblN0b3JhZ2UgOiBsb2NhbFN0b3JhZ2U7XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coc3RvcmFnZSk7Il19
