$(function() {

	//jQuery goes here!

	//When we click on the hamburger
	$('.fa-bars').on('click', function() {
		//we need to display flex the main nav
		console.log('HI!');
		$('.mainNav').toggleClass('show');
	});



});