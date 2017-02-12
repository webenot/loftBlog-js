let link = jQuery('#myLink');
let cb1 = () => {
	alert('Click');
	return false;
};
let cb2 = () => {
	alert('Click 2');
	return false;
};
link.on('click', cb1);
link.on('click', cb2);
link.off('click', cb1);
//link.off('click');