$(function() {

	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class

	// equipment-carousel
		$('.equipment__inner').slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			arrows: false,
			responsive: [
		
				{
					breakpoint: 1200,
					settings: {
						arrows: true,
						slidesToShow: 3,
					}	
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						arrows: true
					}	
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true
					}	
				}
			]

		});
	//END equipment-carousel

	// video-slider
		$('.video-slider').slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			responsive: [
		
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true
					}	
				}
			]
		});

		$('.video-slide__play').magnificPopup({
			type: 'iframe',
			mainClass: 'video-slide-popup'
		})
	// END video-slider

	// service-slider
		$('.service__slider').slick({
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true
					}	
				}
			]
		});
	// END service-slider

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});