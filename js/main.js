$(document).ready(function($) {

	// responsive nav
	$(".nav-trigger").on('click', function(event) {
		$('#nav').toggleClass('nav-open');
		$(this).toggleClass('nav-open');
	});

	$("#nav a").on('click', function(event) {
		$('#nav').toggleClass('nav-open');
		$('.nav-trigger').toggleClass('nav-open');
	});

	// smooth scroll to div - http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop : target.offset().top
					}, 700);
					return false;
				}
			}
		});
	});
});


