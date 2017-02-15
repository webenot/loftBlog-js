/**
 * Created by aquilla on 15.02.2017.
 */

getData.addEventListener('click', () => {
	let jsonScript = document.createElement('script');
	document.head.appendChild(jsonScript);
	jsonScript.onload = jsonScript.onerror = () => {
		//jsonScript.parentNode.removeChild(jsonScript);
	};
	jsonScript.src = 'http://localhost:7777?method=updateData';
});

let updateData = data => {
	dataField.value = data.join(', ');
};