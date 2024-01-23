$(function () {
	$('.design-slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img class="arrow arrow-left" src="img/design/arrow-left.svg" alt="">',
		nextArrow: '<img class="arrow arrow-right" src="img/design/arrow-right.svg" alt="">',
		responsive: [
			{
				breakpoint: 601,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
				}
			}
		]
	});
});


