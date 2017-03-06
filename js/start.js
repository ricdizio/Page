(function($){
  $(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider();
    $('.button-collapse').sideNav();
	// Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);
    $('.carousel.carousel-slider').carousel({fullWidth: true});  
  }); // end of document ready
})(jQuery); // end of jQuery name space