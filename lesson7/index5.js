'use strict';

var link = jQuery('#myLink');
var cb1 = function cb1() {
	alert('Click');
	return false;
};
var cb2 = function cb2() {
	alert('Click 2');
	return false;
};
link.on('click', cb1);
link.on('click', cb2);
link.off('click', cb1);
//link.off('click');

//# sourceMappingURL=index5.js.map