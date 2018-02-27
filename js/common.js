$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items : 1,
		autoplay: true,
		loop: true
	});
	$(".min_height").click(function() {
		$(".menu-icon").toggleClass("menu-icon-open");
	});
});