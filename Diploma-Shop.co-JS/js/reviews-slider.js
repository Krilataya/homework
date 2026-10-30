export const reviewsSlider = () => {
	new Swiper(".reviews__swiper", {
		autoHeight: true,
		loop: true,
		spaceBetween: 20,

		mousewheel: {
			forceToAxis: true,
		},

		navigation: {
			nextEl: ".reviews-slider-btn--next",
			prevEl: ".reviews-slider-btn--prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1.08,
				centeredSlides: true,
				spaceBetween: 30,
			},

			576: {
				slidesPerView: 1.08,
				centeredSlides: true,
				spaceBetween: 50,
			},

			768: {
				slidesPerView: 2,
				// centeredSlidesBounds: true,
				centeredSlides: false,
				spaceBetween: 20,
			},

			992: {
				slidesPerView: 3.5,
				centeredSlides: true,
				spaceBetween: 20,
			},
		},
	});
};
