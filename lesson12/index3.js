/**
 * Created by aquilla on 28.02.2017.
 */

function readImage(file) {
	return new Promise((resolve,reject) => {
		let fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.addEventListener('load', e => {
			resolve(fileReader.result);
		});
	});

}

photoInput.addEventListener('change', e => {
	let file = e.target.files[0];
	console.log(file);
	readImage(file).then(result => {
		theImage.src = result;
	});
});