$(window).load(function() {
	$('div.solid').delay(1100).animate({opacity: 0}, 800, 'easeInOutQuad');
	$('div.secondary').delay(1100).animate({opacity: 1}, 800, 'easeInOutQuad');
});