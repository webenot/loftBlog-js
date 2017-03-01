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