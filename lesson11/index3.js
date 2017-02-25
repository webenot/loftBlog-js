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
