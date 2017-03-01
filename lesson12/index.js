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