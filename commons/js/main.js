$(function () {
	var menuSlider = $('.menu_slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		pause: 4000,
		captions: true,
		controls: false,
		pager: false,
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			console.log(newIndex);
			updatePager(newIndex);
		}
	});

	$('.slide_controls span').click(function () {
		if ($(this).hasClass('prev')) {
			menuSlider.goToPrevSlide();
		} else {
			menuSlider.goToNextSlide();
		}
	});

	$('.menual_pager span').click(function () {
		var idx = $(this).index();
		updatePager(idx);
		menuSlider.goToSlide(idx);
	});

	function updatePager(idx) {
		$('.menual_pager span').removeClass('active');
		$('.menual_pager span').eq(idx).addClass('active');
	}
	updatePager(0);
});
$(function () {
	headerSlide = $('.header_slider').bxSlider({
		pager: false,
		controls: true,
		prevText: '<i class="fas fa-caret-square-left"></i>',
		nextText: '<i class="fas fa-caret-square-right"></i>'
	});
	$('.header_slide_controls span').click(function () {
		if ($(this).hasClass('prev')) {
			slider.goToPrevSlide();
		} else {
			slider.goToNextSlide();
		}
	});
});
$(function () {
	var $toggle_menu = $('.toggle_menu a');
	var $submenubox = $('.category_container');

	$toggle_menu.click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$submenubox.show();
		} else {
			$submenubox.hide();
		}
	});
});
