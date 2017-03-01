/**
 * Created by aquilla on 28.02.2017.
 */
let file,
	fileReader = new FileReader(),
	chunkSize = 1024,
	chunkCount,
	lastEndByte = 0;

function loadNextChunk() {
	let currentChunkSize = lastEndByte + chunkSize > file.size ? file.size - lastEndByte : chunkSize,
		blob = file.slice(lastEndByte, lastEndByte + currentChunkSize);

	fileReader.readAsText(blob);

	lastEndByte += currentChunkSize;
	console.log(lastEndByte);
	inProgress.textContent = 'Загружено ' + parseInt(100 / chunkCount * (file.size < chunkSize ? 1 : lastEndByte / chunkSize)) + '%';
}

fileReader.addEventListener('load', e => {


	//TODO отправка данных на сервер
	content.textContent += e.target.result;
	if (lastEndByte < file.size) {
		loadNextChunk();
	}
});

photoInput.addEventListener('change', e => {
	file = e.target.files[0];
	console.log(file);
	chunkCount = file.size < chunkSize ? 1 : file.size / chunkSize;
	lastEndByte = 0;

	loadNextChunk();
});