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