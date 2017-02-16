/**
 * Created by aquilla on 15.02.2017.
 */

myButton.addEventListener('click', () => {
	/*let res = jQuery.get('text.txt', data => {
		console.log(data);
	});
	console.log(res);*/
	//jQuery('#container').load('text.txt');
	/*jQuery.ajax({
		url: 'text.txt',
		success: data => console.log(data)

	});*/
	//jQuery.get('text.txt').then(data => console.log(data));
	//jQuery.get('text.txt').done(data => console.log(data));
	//jQuery.get('text.txt').fail(data => console.log(data));
	jQuery.get('text.txt').done(data => console.log(data)).fail(data => console.log('Error'));
});