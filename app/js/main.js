$(function () {

///////////////start-nicescroll//////////////////////
	$(".text-about-wh, .text-about-bl, .about__info").niceScroll({
		cursorcolor:"#3dbce2",
		cursorwidth:"4px",
		background:"none",
		cursorborder:"none",
		cursorborderradius:4
	});
///////////////end-nicescroll//////////////////////

		var mySwiper = new Swiper ('.header__menu', {
		containerModifierClass: 'header__menu', 
		wrapperClass: 'header__menu-list',
		slideClass: 'header__menu-item',
		loop: false,
		lazy: true,
		spaceBetween: 0,
		centeredSlides: false,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.header__menu-btn-next',
		},
		breakpoints: {
			320: {
				allowTouchMove: true,
				loop: false,
				spaceBetween: 0,
				centeredSlides: false,
				slidesPerView: 'auto',
				followFinger: true,
			},
			1024: {
				 allowTouchMove: false,
			},
		}
	})

		var mySwiper = new Swiper ('.slider__cont', {
		containerModifierClass: 'slider__cont', 
		wrapperClass: 'slider__wrap',
		slideClass: 'slider__item',
		loop: true,
		lazy: true,
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.slider__button-next',
			prevEl: '.slider__button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
			el: '.slider__pagination',
		},
	})

	var mySwiper = new Swiper ('.popup-potfolio__container', {
		containerModifierClass: 'popup-potfolio__container', 
		wrapperClass: 'popup-potfolio__wrapper',
		slideClass: 'popup-potfolio__item',
		loop: true,
		lazy: true,
		spaceBetween: 5,
		centeredSlides: true,
		navigation: {
			nextEl: '.popup-potfolio__button-next',
			prevEl: '.popup-potfolio__button-prev',
		},
		pagination: {
			clickable: true,
			el: '.popup-potfolio__pagination',
		},
	})
	var mySwiper = new Swiper ('.popup-in__container', {
		containerModifierClass: 'popup-in__container', 
		wrapperClass: 'popup-in__wrapper',
		slideClass: 'popup-in__item',
		loop: true,
		lazy: true,
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.popup-in__button-next',
			prevEl: '.popup-in__button-prev',
		},
		pagination: {
			clickable: true,
			el: '.popup-in__pagination',
		},
		breakpoints: {
			320: {
				loop: true,
				spaceBetween: 10,
				centeredSlides: false,
				slidesPerView: 'auto',
			},
			385: {
				loop: true,
				spaceBetween: 20,
				centeredSlides: true,
				slidesPerView: 'auto',
			},
		}
	})

	//==============PHONE_MASK====================
$("#phone").click(function(){ //add id for mask
	$(this).setCursorPosition(4);
}).mask("+42(999)999-99-99");

$.fn.setCursorPosition = function(pos) {
	if ($(this).get(0).setSelectionRange) {
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};
	//==============PHONE_MASK====================

//===================scroll=================
	// initScrollMagic
	var controller = new ScrollMagic.Controller();
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".header__info",
		duration: '0',
		triggerHook: 0.05,
		offset: 70,
		reverse: true
	})
	.setClassToggle('.logo__wrap', 'scroll') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".header__info",
		duration: '0',
		triggerHook: 0.05,
		offset: 70,
		reverse: true
	})
	.setClassToggle('.logo__online', 'scroll') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".salon__title",
		duration: '0',
		triggerHook: 0.3,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.border-left', 'border-active') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".salon__title",
		duration: '0',
		triggerHook: 0.3,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.border-right', 'border-active') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".salon__title",
		duration: '0',
		triggerHook: 0.3,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.form__arrow-left', 'arrow-active') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".salon__title",
		duration: '0',
		triggerHook: 0.3,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.form__arrow-right', 'arrow-active') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var controller = new ScrollMagic.Controller();
	// loop each progect element
	$('.bevel-screen').each(function(){
			// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '0',
			triggerHook: 0.25,
			offset: 50,
			reverse: false
		})
		.setClassToggle(this, 'active') //add class to progect
		// .addIndicators({
		// 	name: 'anim scene',
		// 	colorTrigger: 'blue',
		// 	colorStart: 'red',
		// 	colorEnd: 'green'
		// })
		.addTo(controller);
	});
// end scene
// start scene
	var controller = new ScrollMagic.Controller();
	// loop each progect element
	$('.title-wt').each(function(){
			// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '0',
			triggerHook: 0.6,
			offset: 0,
			reverse: false
		})
		.setClassToggle(this, 'fade-down') //add class to progect
		.addTo(controller);
	});
// end scene
// start scene
	var controller = new ScrollMagic.Controller();
	// loop each progect element
	$('.title-bl').each(function(){
			// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '0',
			triggerHook: 0.6,
			offset: 0,
			reverse: false
		})
		.setClassToggle(this, 'fade-down') //add class to progect
		.addTo(controller);
	});
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--1', 'fade-down') //add class to progect
	.addTo(controller);
// end scene// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--2', 'fade-down') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--3', 'fade-down') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--4', 'fade-down') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--5', 'fade-down') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--6', 'fade-down') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".advantages__item",
		duration: '0',
		triggerHook: 0.8,
		offset: 50,
		reverse: false
	})
	.setClassToggle('.advantages__item--7', 'fade-down') //add class to progect
	.addTo(controller);
// end scene

});
