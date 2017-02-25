(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by aquilla on 21.02.2017.
 */
/*
 VK.init({
 apiId: 5883860
 });

 let cb = response => {
 if (response.status == 'connected') {
 console.log('авторизация прошла успешно', response);
 } else {
 console.log('ошибка авторизации', response);
 }
 };

 VK.Auth.login(cb);*/

// Без промисов
/*window.addEventListener('load', (e) => {
 VK.init({
 apiId: 5883860
 });

 VK.Auth.login(response => {
 if (response.status == 'connected') {
 console.log(response);
 VK.api('users.get', {'name_case': 'gen'}, response => {
 if (response.error) {
 alert(response.error.error_msg);
 } else {
 headerInfo.textContent = `Музыка на странице ${response.response[0].first_name} ${response.response[0].last_name}`;
 console.log(response);
 }
 });
 } else {
 alert(`Ошибка: ${e.message}`);
 }
 }, 8);
 });*/

(function(ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
			if (!this) return null;
			if (this.matches(selector)) return this;
			if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

if (Handlebars) {
	Handlebars.registerHelper('formatTime', function(context, options) {
		let seconds = context % 60;
		let minutes = (context > (60 * 60)) ? (parseInt(context / 60) % 60) : parseInt(context / 60);
		let hours = (context > (60 * 60)) ? parseInt(context / 60 / 60) : 0;

		return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	});
}

let globalPlayer = document.createElement('audio');
let playingItem;

new Promise(resolve =>{
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(() => {
	return new Promise((resolve, reject) => {
		if (VK) {
			VK.init({
				apiId: 5883860
			});

			VK.Auth.login(response => {
				if (response.status == 'connected') {
					resolve(response);
				} else {
					reject(new Error('Не удалось авторизироваться'));
				}
			}, 8);//1 | 2 | 4 | 8 | 16 | 128 | 256 | 1024 | 2048 | 8192 | 32768 | 65536 | 131072 | 262144 | 524288 | 1048576 | 4194304 | 134217728);
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).then(() => {
	return new Promise((resolve, reject) => {
		if (VK) {
			VK.Api.call('users.get', {'v': '5.62', 'name_case': 'gen'}, response => {
				if (response.error) {
					reject(new Error(response.error.error_msg));
				} else {
					headerInfo.textContent = `Музыка на странице ${response.response[0].first_name} ${response.response[0].last_name}`;
					resolve();
				}
			});
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).then(() => {
	function onProgress(e) {
		let progressBar = playingItem.querySelector('[data-role="progressbar"]');
		let duration = e.target.duration;
		let currentTime = e.target.currentTime;
		let progress = parseInt(100 / duration * currentTime);

		progressBar.style.width = progress + '%';
	}
	function onPlay() {
		playingItem.querySelector('[data-role="playback"]').className = 'glyphicon glyphicon-pause';
		playingItem.className = 'list-group-item active';
		mainPlaybackButton.className = 'btn btn-primary btn-lg';
		mainPlaybackButton.children[0].className = 'glyphicon glyphicon-pause';
	}
	function onPause() {
		playingItem.querySelector('[data-role="playback"]').className = 'glyphicon glyphicon-play';
		playingItem.className = 'list-group-item';
		mainPlaybackButton.className = 'btn btn-default btn-lg';
		mainPlaybackButton.children[0].className = 'glyphicon glyphicon-play';
	}
	function toSong(to) {
		if (playingItem) {
			let nextPlayer = to === 'next' ? playingItem.nextElementSibling : playingItem.previousElementSibling;
			if (nextPlayer) {
				nextPlayer.querySelector('[data-role="playback"]').dispatchEvent(new CustomEvent('click'));
			} else {
				if (to === 'next' && !playingItem.nextElementSibling ) {
					playingItem.parentNode.firstElementChild.querySelector('[data-role="playback"]').dispatchEvent(new CustomEvent('click'));
				} else {
					if (to === 'prev' && !playingItem.previousElementSibling) {
						playingItem.parentNode.lastElementChild.querySelector('[data-role="playback"]').dispatchEvent(new CustomEvent('click'));
					}
				}
			}
		}
	}
	function onEnd() {
		if (playingItem.nextElementSibling)
			toSong('next');
		else
			toSong('prev');
	}
	prevSongButton.addEventListener('click', () => {
		toSong('prev');
	});
	mainPlaybackButton.addEventListener('click', () => {
		if (playingItem) {
			playingItem.querySelector('[data-role="playback"]').dispatchEvent(new CustomEvent('click'));
		} else {
			if (audioList) {
				playingItem = audioList.firstElementChild;
				if (playingItem) {
					globalPlayer.src = playingItem.querySelector('[data-role="playback"]').getAttribute('data-src');
					globalPlayer.play();
				}
			}
		}
	});
	nextSongButton.addEventListener('click', () => {
		toSong('next');
	});
	document.addEventListener('keydown', e => {
		console.log(e.code);
		if (e.target.tagName !== 'INPUT') {
			switch (e.keyCode) {
				case 32 : {
					e.preventDefault();
					mainPlaybackButton.dispatchEvent(new CustomEvent('click'));
					break;
				}
				case 37 : {
					e.preventDefault();
					prevSongButton.dispatchEvent(new CustomEvent('click'));
					break;
				}
				case 39 : {
					e.preventDefault();
					nextSongButton.dispatchEvent(new CustomEvent('click'));
					break;
				}
			}
		}
	}, true);

	globalPlayer.addEventListener('play', onPlay);
	globalPlayer.addEventListener('pause', onPause);
	globalPlayer.addEventListener('timeupdate', onProgress);
	globalPlayer.addEventListener('ended', onEnd);

	results.addEventListener('click', (e) => {
		if (e.target.className == 'progress' || e.target.className == 'progress-bar progress-bar-success progress-bar-striped') {
			let progressBar = e.target.querySelector('[data-role="progressbar"]') || e.target;
			let fullWidth = 0;
			if (e.target.className == 'progress') {
				fullWidth = e.target.clientWidth;
			} else {
				fullWidth = e.target.parentNode.clientWidth;
			}
			let currentTime = parseInt(e.layerX / fullWidth * 100);
			let currentItem = e.target.closest('li');

			if (currentItem === playingItem) {
				globalPlayer.play().then(() => {
					globalPlayer.currentTime = e.layerX / fullWidth * globalPlayer.duration;
					progressBar.style.width = currentTime;
				});
			} else {
				playingItem = currentItem;
				globalPlayer.src = playingItem.querySelector('[data-role="playback"]').getAttribute('data-src');

				globalPlayer.play().then(() => {
					if(!isNaN(globalPlayer.duration)) {
						globalPlayer.currentTime = e.layerX / fullWidth * globalPlayer.duration;
						progressBar.style.width = currentTime;
					}
				});
			}
		} else {
			if (e.target.getAttribute('data-role') == 'playback') {
				let currentItem = e.target.closest('li');
				if (currentItem === playingItem) {
					if (globalPlayer.paused) {
						globalPlayer.play();
					} else {
						globalPlayer.pause();
					}
				} else {
					if (!globalPlayer.paused) {
						onPause();
					}
					playingItem = currentItem;

					globalPlayer.src = e.target.getAttribute('data-src');
					globalPlayer.play();
				}
			}
		}
	}, true);

	return new Promise((resolve, reject) => {
		if (VK) {
			VK.Api.call('audio.get', {'v': '5.62'}, response => {
				if (response.error) {
					reject(new Error(response.error.error_msg));
				} else {
					let source   = playerItemTemplate.innerHTML;
					let template = Handlebars.compile(source);
					let context = {
						list: response.response.items
					};
					results.innerHTML  = template(context);
					resolve();
				}
			});
		} else {
			reject(new Error('Не удалось подключиться к API Vkontakte'));
		}
	});
}).catch(e => {
	alert(`Ошибка: ${e.message}`);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FxdWlsbGEvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiRDovQ2xvdWRATWFpbC5SdS9XT1JLL0phdmFTY3JpcHQtbGVhcm5pbmcvbG9mdEJsb2ctanMvbGVzc29uMTEvaW5kZXgzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSBhcXVpbGxhIG9uIDIxLjAyLjIwMTcuXHJcbiAqL1xyXG4vKlxyXG4gVksuaW5pdCh7XHJcbiBhcGlJZDogNTg4Mzg2MFxyXG4gfSk7XHJcblxyXG4gbGV0IGNiID0gcmVzcG9uc2UgPT4ge1xyXG4gaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAnY29ubmVjdGVkJykge1xyXG4gY29uc29sZS5sb2coJ9Cw0LLRgtC+0YDQuNC30LDRhtC40Y8g0L/RgNC+0YjQu9CwINGD0YHQv9C10YjQvdC+JywgcmVzcG9uc2UpO1xyXG4gfSBlbHNlIHtcclxuIGNvbnNvbGUubG9nKCfQvtGI0LjQsdC60LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuCcsIHJlc3BvbnNlKTtcclxuIH1cclxuIH07XHJcblxyXG4gVksuQXV0aC5sb2dpbihjYik7Ki9cclxuXHJcbi8vINCR0LXQtyDQv9GA0L7QvNC40YHQvtCyXHJcbi8qd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG4gVksuaW5pdCh7XHJcbiBhcGlJZDogNTg4Mzg2MFxyXG4gfSk7XHJcblxyXG4gVksuQXV0aC5sb2dpbihyZXNwb25zZSA9PiB7XHJcbiBpZiAocmVzcG9uc2Uuc3RhdHVzID09ICdjb25uZWN0ZWQnKSB7XHJcbiBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiBWSy5hcGkoJ3VzZXJzLmdldCcsIHsnbmFtZV9jYXNlJzogJ2dlbid9LCByZXNwb25zZSA9PiB7XHJcbiBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuIGFsZXJ0KHJlc3BvbnNlLmVycm9yLmVycm9yX21zZyk7XHJcbiB9IGVsc2Uge1xyXG4gaGVhZGVySW5mby50ZXh0Q29udGVudCA9IGDQnNGD0LfRi9C60LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1ICR7cmVzcG9uc2UucmVzcG9uc2VbMF0uZmlyc3RfbmFtZX0gJHtyZXNwb25zZS5yZXNwb25zZVswXS5sYXN0X25hbWV9YDtcclxuIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuIH1cclxuIH0pO1xyXG4gfSBlbHNlIHtcclxuIGFsZXJ0KGDQntGI0LjQsdC60LA6ICR7ZS5tZXNzYWdlfWApO1xyXG4gfVxyXG4gfSwgOCk7XHJcbiB9KTsqL1xyXG5cclxuKGZ1bmN0aW9uKEVMRU1FTlQpIHtcclxuXHRFTEVNRU5ULm1hdGNoZXMgPSBFTEVNRU5ULm1hdGNoZXMgfHwgRUxFTUVOVC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC5tc01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm9NYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0RUxFTUVOVC5jbG9zZXN0ID0gRUxFTUVOVC5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdFx0aWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0aWYgKHRoaXMubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiB0aGlzO1xyXG5cdFx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge3JldHVybiBudWxsfVxyXG5cdFx0XHRlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHRcdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTtcclxuXHJcbmlmIChIYW5kbGViYXJzKSB7XHJcblx0SGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignZm9ybWF0VGltZScsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcclxuXHRcdGxldCBzZWNvbmRzID0gY29udGV4dCAlIDYwO1xyXG5cdFx0bGV0IG1pbnV0ZXMgPSAoY29udGV4dCA+ICg2MCAqIDYwKSkgPyAocGFyc2VJbnQoY29udGV4dCAvIDYwKSAlIDYwKSA6IHBhcnNlSW50KGNvbnRleHQgLyA2MCk7XHJcblx0XHRsZXQgaG91cnMgPSAoY29udGV4dCA+ICg2MCAqIDYwKSkgPyBwYXJzZUludChjb250ZXh0IC8gNjAgLyA2MCkgOiAwO1xyXG5cclxuXHRcdHJldHVybiAoaG91cnMgPCAxMCA/ICcwJyArIGhvdXJzIDogaG91cnMpICsgJzonICsgKG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzKSArICc6JyArIChzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmxldCBnbG9iYWxQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5sZXQgcGxheWluZ0l0ZW07XHJcblxyXG5uZXcgUHJvbWlzZShyZXNvbHZlID0+e1xyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcblx0XHRyZXNvbHZlKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5vbmxvYWQgPSByZXNvbHZlO1xyXG5cdH1cclxufSkudGhlbigoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGlmIChWSykge1xyXG5cdFx0XHRWSy5pbml0KHtcclxuXHRcdFx0XHRhcGlJZDogNTg4Mzg2MFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdFZLLkF1dGgubG9naW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ2Nvbm5lY3RlZCcpIHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNGC0YzRgdGPJykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgOCk7Ly8xIHwgMiB8IDQgfCA4IHwgMTYgfCAxMjggfCAyNTYgfCAxMDI0IHwgMjA0OCB8IDgxOTIgfCAzMjc2OCB8IDY1NTM2IHwgMTMxMDcyIHwgMjYyMTQ0IHwgNTI0Mjg4IHwgMTA0ODU3NiB8IDQxOTQzMDQgfCAxMzQyMTc3MjgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVqZWN0KG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogQVBJIFZrb250YWt0ZScpKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkudGhlbigoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGlmIChWSykge1xyXG5cdFx0XHRWSy5BcGkuY2FsbCgndXNlcnMuZ2V0Jywgeyd2JzogJzUuNjInLCAnbmFtZV9jYXNlJzogJ2dlbid9LCByZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcblx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLmVycm9yLmVycm9yX21zZykpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRoZWFkZXJJbmZvLnRleHRDb250ZW50ID0gYNCc0YPQt9GL0LrQsCDQvdCwINGB0YLRgNCw0L3QuNGG0LUgJHtyZXNwb25zZS5yZXNwb25zZVswXS5maXJzdF9uYW1lfSAke3Jlc3BvbnNlLnJlc3BvbnNlWzBdLmxhc3RfbmFtZX1gO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZWplY3QobmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC/0L7QtNC60LvRjtGH0LjRgtGM0YHRjyDQuiBBUEkgVmtvbnRha3RlJykpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KS50aGVuKCgpID0+IHtcclxuXHRmdW5jdGlvbiBvblByb2dyZXNzKGUpIHtcclxuXHRcdGxldCBwcm9ncmVzc0JhciA9IHBsYXlpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJwcm9ncmVzc2JhclwiXScpO1xyXG5cdFx0bGV0IGR1cmF0aW9uID0gZS50YXJnZXQuZHVyYXRpb247XHJcblx0XHRsZXQgY3VycmVudFRpbWUgPSBlLnRhcmdldC5jdXJyZW50VGltZTtcclxuXHRcdGxldCBwcm9ncmVzcyA9IHBhcnNlSW50KDEwMCAvIGR1cmF0aW9uICogY3VycmVudFRpbWUpO1xyXG5cclxuXHRcdHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MgKyAnJSc7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG9uUGxheSgpIHtcclxuXHRcdHBsYXlpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJwbGF5YmFja1wiXScpLmNsYXNzTmFtZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXBhdXNlJztcclxuXHRcdHBsYXlpbmdJdGVtLmNsYXNzTmFtZSA9ICdsaXN0LWdyb3VwLWl0ZW0gYWN0aXZlJztcclxuXHRcdG1haW5QbGF5YmFja0J1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyc7XHJcblx0XHRtYWluUGxheWJhY2tCdXR0b24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcGF1c2UnO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBvblBhdXNlKCkge1xyXG5cdFx0cGxheWluZ0l0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInBsYXliYWNrXCJdJykuY2xhc3NOYW1lID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc7XHJcblx0XHRwbGF5aW5nSXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuXHRcdG1haW5QbGF5YmFja0J1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZyc7XHJcblx0XHRtYWluUGxheWJhY2tCdXR0b24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHRvU29uZyh0bykge1xyXG5cdFx0aWYgKHBsYXlpbmdJdGVtKSB7XHJcblx0XHRcdGxldCBuZXh0UGxheWVyID0gdG8gPT09ICduZXh0JyA/IHBsYXlpbmdJdGVtLm5leHRFbGVtZW50U2libGluZyA6IHBsYXlpbmdJdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcblx0XHRcdGlmIChuZXh0UGxheWVyKSB7XHJcblx0XHRcdFx0bmV4dFBsYXllci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwicGxheWJhY2tcIl0nKS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xpY2snKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRvID09PSAnbmV4dCcgJiYgIXBsYXlpbmdJdGVtLm5leHRFbGVtZW50U2libGluZyApIHtcclxuXHRcdFx0XHRcdHBsYXlpbmdJdGVtLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInBsYXliYWNrXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJykpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodG8gPT09ICdwcmV2JyAmJiAhcGxheWluZ0l0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZykge1xyXG5cdFx0XHRcdFx0XHRwbGF5aW5nSXRlbS5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInBsYXliYWNrXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBvbkVuZCgpIHtcclxuXHRcdGlmIChwbGF5aW5nSXRlbS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcblx0XHRcdHRvU29uZygnbmV4dCcpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0b1NvbmcoJ3ByZXYnKTtcclxuXHR9XHJcblx0cHJldlNvbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHR0b1NvbmcoJ3ByZXYnKTtcclxuXHR9KTtcclxuXHRtYWluUGxheWJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRpZiAocGxheWluZ0l0ZW0pIHtcclxuXHRcdFx0cGxheWluZ0l0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInBsYXliYWNrXCJdJykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGF1ZGlvTGlzdCkge1xyXG5cdFx0XHRcdHBsYXlpbmdJdGVtID0gYXVkaW9MaXN0LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0XHRcdGlmIChwbGF5aW5nSXRlbSkge1xyXG5cdFx0XHRcdFx0Z2xvYmFsUGxheWVyLnNyYyA9IHBsYXlpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJwbGF5YmFja1wiXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuXHRcdFx0XHRcdGdsb2JhbFBsYXllci5wbGF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0bmV4dFNvbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHR0b1NvbmcoJ25leHQnKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhlLmNvZGUpO1xyXG5cdFx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcpIHtcclxuXHRcdFx0c3dpdGNoIChlLmtleUNvZGUpIHtcclxuXHRcdFx0XHRjYXNlIDMyIDoge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0bWFpblBsYXliYWNrQnV0dG9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbGljaycpKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIDM3IDoge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cHJldlNvbmdCdXR0b24uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJykpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgMzkgOiB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRuZXh0U29uZ0J1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xpY2snKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCB0cnVlKTtcclxuXHJcblx0Z2xvYmFsUGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBvblBsYXkpO1xyXG5cdGdsb2JhbFBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIG9uUGF1c2UpO1xyXG5cdGdsb2JhbFBsYXllci5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgb25Qcm9ncmVzcyk7XHJcblx0Z2xvYmFsUGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgb25FbmQpO1xyXG5cclxuXHRyZXN1bHRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2dyZXNzJyB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcyBwcm9ncmVzcy1iYXItc3RyaXBlZCcpIHtcclxuXHRcdFx0bGV0IHByb2dyZXNzQmFyID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInByb2dyZXNzYmFyXCJdJykgfHwgZS50YXJnZXQ7XHJcblx0XHRcdGxldCBmdWxsV2lkdGggPSAwO1xyXG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdwcm9ncmVzcycpIHtcclxuXHRcdFx0XHRmdWxsV2lkdGggPSBlLnRhcmdldC5jbGllbnRXaWR0aDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmdWxsV2lkdGggPSBlLnRhcmdldC5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBjdXJyZW50VGltZSA9IHBhcnNlSW50KGUubGF5ZXJYIC8gZnVsbFdpZHRoICogMTAwKTtcclxuXHRcdFx0bGV0IGN1cnJlbnRJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50SXRlbSA9PT0gcGxheWluZ0l0ZW0pIHtcclxuXHRcdFx0XHRnbG9iYWxQbGF5ZXIucGxheSgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0Z2xvYmFsUGxheWVyLmN1cnJlbnRUaW1lID0gZS5sYXllclggLyBmdWxsV2lkdGggKiBnbG9iYWxQbGF5ZXIuZHVyYXRpb247XHJcblx0XHRcdFx0XHRwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGN1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBsYXlpbmdJdGVtID0gY3VycmVudEl0ZW07XHJcblx0XHRcdFx0Z2xvYmFsUGxheWVyLnNyYyA9IHBsYXlpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJwbGF5YmFja1wiXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcclxuXHJcblx0XHRcdFx0Z2xvYmFsUGxheWVyLnBsYXkoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdGlmKCFpc05hTihnbG9iYWxQbGF5ZXIuZHVyYXRpb24pKSB7XHJcblx0XHRcdFx0XHRcdGdsb2JhbFBsYXllci5jdXJyZW50VGltZSA9IGUubGF5ZXJYIC8gZnVsbFdpZHRoICogZ2xvYmFsUGxheWVyLmR1cmF0aW9uO1xyXG5cdFx0XHRcdFx0XHRwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGN1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKSA9PSAncGxheWJhY2snKSB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuXHRcdFx0XHRpZiAoY3VycmVudEl0ZW0gPT09IHBsYXlpbmdJdGVtKSB7XHJcblx0XHRcdFx0XHRpZiAoZ2xvYmFsUGxheWVyLnBhdXNlZCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxQbGF5ZXIucGxheSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsUGxheWVyLnBhdXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghZ2xvYmFsUGxheWVyLnBhdXNlZCkge1xyXG5cdFx0XHRcdFx0XHRvblBhdXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwbGF5aW5nSXRlbSA9IGN1cnJlbnRJdGVtO1xyXG5cclxuXHRcdFx0XHRcdGdsb2JhbFBsYXllci5zcmMgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0XHRnbG9iYWxQbGF5ZXIucGxheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIHRydWUpO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0aWYgKFZLKSB7XHJcblx0XHRcdFZLLkFwaS5jYWxsKCdhdWRpby5nZXQnLCB7J3YnOiAnNS42Mid9LCByZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcblx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLmVycm9yLmVycm9yX21zZykpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgc291cmNlICAgPSBwbGF5ZXJJdGVtVGVtcGxhdGUuaW5uZXJIVE1MO1xyXG5cdFx0XHRcdFx0bGV0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XHJcblx0XHRcdFx0XHRsZXQgY29udGV4dCA9IHtcclxuXHRcdFx0XHRcdFx0bGlzdDogcmVzcG9uc2UucmVzcG9uc2UuaXRlbXNcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXN1bHRzLmlubmVySFRNTCAgPSB0ZW1wbGF0ZShjb250ZXh0KTtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVqZWN0KG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogQVBJIFZrb250YWt0ZScpKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkuY2F0Y2goZSA9PiB7XHJcblx0YWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlLm1lc3NhZ2V9YCk7XHJcbn0pO1xyXG4iXX0=
