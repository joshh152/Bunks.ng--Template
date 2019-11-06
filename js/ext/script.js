
jQuery(function ($) {

	$(document).ready(function() {
		
		"use strict";
		
		// PageLoad();
		FirstLoad();
		HeroSection();
		PageShare();
		Sliders();
		if( (typeof ClapatArubaThemeOptions != 'undefined') && (ClapatArubaThemeOptions.enable_ajax == "1") ){
			AjaxLoad();
			FitThumbScreen();
		} else {
			PageLoadNoAjax();
		}	
		Portfolio();
		BackToTop();
		if( (typeof ClapatArubaThemeOptions != 'undefined') && (ClapatArubaThemeOptions.enable_smooth_scrolling == "1") ){
			VirtualScr();
		}
		JustifiedGrid();
		Lightbox();
		AppearIteam();
		PlayVideo();
		InitContactMap();
		
	});

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	// function PageLoad() {	
		
	// 	// $('body').removeClass('hidden');		
		
	// 	var width = 100,
	// 		perfData = window.performance.timing, 
	// 		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
	// 		time = ((EstimatedTime/1000)%50) * 100
		
		
	// 	// Percentage Increment Animation
	// 	var PercentageID = $("#precent"),
	// 			start = 0,
	// 			end = 100,
	// 			durataion = time;
	// 			animateValue(PercentageID, start, end, durataion);
				
	// 	function animateValue(id, start, end, duration) {
		  
	// 		var range = end - start,
	// 		  current = start,
	// 		  increment = end > start? 1 : -1,
	// 		  stepTime = Math.abs(Math.floor(duration / range)),
	// 		  obj = $(id);
			
	// 		var timer = setInterval(function() {
	// 			current += increment;
	// 			$(obj).text(current);
	// 		  //obj.innerHTML = current;
	// 			if (current == end) {
	// 				clearInterval(timer);
	// 			}
	// 		}, stepTime);
	// 	}
		
	// 	// Fading Out Loadbar on Finised
	// 	setTimeout(function(){
			
			
	// 		TweenMax.to($(".preloader-wrap"), 0.5, {force3D:true, opacity:0, ease:Power1.easeIn});
	// 		TweenMax.set($(".preloader-wrap"), {visibility:'hidden', yPercent: -101, delay:0.6});
			
	// 		setTimeout(function(){
				
	// 			TweenMax.to($("#mains"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});		
	// 			TweenMax.to($("#page-action-holder-left"), 0.3, {opacity:1, ease:Power2.easeOut});
	// 			if( $('#hero').hasClass("has-image")) {	
	// 				TweenMax.to($("#hero-bg-image"), 0.7, {force3D:true, scale:1.05 , opacity:1, delay:0.6, ease:Power2.easeOut});
	// 				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
	// 				TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.75, ease:Power2.easeOut});
	// 			} else {
	// 				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
	// 				TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.75, ease:Power2.easeOut});
	// 			}
	// 			if ($('#hero-bg-image').hasClass("light-content")) {
	// 				$('#hero-caption').addClass('light-content');
	// 				setTimeout(function(){
	// 					$('#magic-cursor').addClass('light-content');
	// 				} , 700 );
	// 				$('header').addClass('transparent');
	// 				setTimeout(function(){
	// 					$('#header-container, #menu-overlay, #page-bottom').addClass('light-content');
	// 				} , 600 );
	// 			}
				
	// 			var tlThumbs = new TimelineLite();
	// 			$("#portfolios .item-wrap").each(function(index, element) {
	// 				tlThumbs.to(element, 0.5, {y:0, opacity:1, delay:0.1, ease:Power2.easeOut}, index * 0.1)
	// 			});
				
					
	// 			setTimeout( function(){	
	// 				$('body').removeClass("load-project-page")
	// 			} , 850 );
				
	// 			setTimeout( function(){	
	// 				$('body').removeClass("show-loader")
	// 			} , 800 );
				
	// 			TweenMax.set($("#inner-main-content"), {y: 80, opacity:0, delay:0});		
	// 			var tlRow = new TimelineLite();
	// 			$("#inner-main-content").each(function(index, element) {
	// 				tlRow.to(element, 0.5, {force3D:true, opacity:1, y:0, delay:0.8, ease:Power3.easeOut}, index * 0.1)
	// 			});	
			
	// 		} , 500 );
				  
	// 	}, time);
		
		
		
	// }
	
	
	/*--------------------------------------------------
	Function Page Load No Ajax
	---------------------------------------------------*/

	function PageLoadNoAjax() {	
		
		var mouse = { x: 0, y: 0 };
		var pos = { x: 0, y: 0 };
		var ratio = 0.25;			
		var active = false;			
		var ball = document.getElementById("ball");
		var ballloader = document.getElementById("ball-loader");
		
		
		TweenLite.set(ball, { xPercent: -50, yPercent: -50 });
		
		document.addEventListener("mousemove", mouseMove);
		
		function mouseMove(e) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			mouse.x = e.pageX;
			mouse.y = e.pageY - scrollTop;
		}
		
		TweenLite.ticker.addEventListener("tick", updatePosition);
		
		function updatePosition() {
			if (!active) {
				pos.x += (mouse.x - pos.x) * ratio;
				pos.y += (mouse.y - pos.y) * ratio;
		
				TweenLite.set(ball, { x: pos.x, y: pos.y });
			}
		}
		
		$(".parallax-wrap").mouseleave(function(e) {
			TweenMax.to(this, 0.3, { scale: 1 });
			TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '2px', opacity:1 });
			TweenMax.to(ballloader, 0.3, { scale: 1, borderWidth: '2px', top: 0, left: 0 });
			TweenMax.to($( this ).children(), 0.3,{scale:1, x: 0, y:0});
			active = false;
		});
		
		$(".parallax-wrap.bigger").mouseleave(function(e) {
			TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '2px' });
		});
		
		$(".parallax-wrap").mouseenter(function(e) {
			TweenMax.to(this, 0.3, { scale: 2 });
			TweenMax.to(ball, 0.3, { scale: 2, borderWidth: '1px',opacity:.2 });
			TweenMax.to(ballloader, 0.3, { scale: 2, borderWidth: '1px', top: 1, left: 1});
			TweenMax.to($( this ).children(), 0.3,{scale:0.5});
			active = true;
		});
		
		$(".parallax-wrap.bigger").mouseenter(function(e) {
			TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '1px' });
		});
		
		$(".parallax-wrap").mousemove(function(e) {
			parallaxCursor(e, this, 2);
			callParallax(e, this);
		});
		
		function callParallax(e, parent) {
			parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
		}
		
		function parallaxIt(e, parent, target, movement) {
			var boundingRect = parent.getBoundingClientRect();
			var relX = e.pageX - boundingRect.left;
			var relY = e.pageY - boundingRect.top;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			
			TweenMax.to(target, 0.3, {
				x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
				y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
				ease: Power2.easeOut
			});
		}
		
		function parallaxCursor(e, parent, movement) {
			var rect = parent.getBoundingClientRect();
			var relX = e.pageX - rect.left;
			var relY = e.pageY - rect.top;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
			pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
			TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
		}
		
		$(".hide-ball").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale: 2, opacity:0});
		});			
		$(".hide-ball").mouseleave(function(e) {
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, opacity:1});
		});
		
		$(".link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth:"0px",scale:3,backgroundColor:"rgba(0, 0, 0, 1)",opacity:.05});
		});			
		$(".link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
		});
		
	}// End Page Load No Ajax	
		


/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {		
	
		// $("html,body").animate({scrollTop: 0}, 1);
		
		$('.items').each(function() {
			var image = $(this).find('.item-image').data('src');	
			$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
		});
		
		$('.page-thumb').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.title-reveal .item-caption').each(function() {
			var textcolor = $(this).data('textcolor');	
			$(this).find(".items-title, .items-title-hover").css('color', function () {
				return textcolor
			});	
		});
		
		// $('.video-cover').each(function() {
		// 	var image = $(this).data('src');	
		// 	$(this).css({'background-image': 'url(' + image + ')'});
		// });		
		
		//Load Default Page
		// $('a.ajax-link').on('click', function() {
		// 	$("body").addClass("show-loader");			
		// 	TweenMax.to($("#page-action-holder-left"), 0.2, {opacity:0, delay:0, ease:Power2.easeInOut});
		// 	$(".scrolltotop").removeClass('page-up');
		// 	setTimeout( function(){	
		// 		TweenMax.to($("#mains"), 0.3, {opacity:0, ease:Power0.ease});				
		// 	} , 10 );
			
		// 	var tlThumbs = new TimelineLite();
		// 	$("#portfolios .item-wrap").each(function(index, element) {
		// 		tlThumbs.to(element, 0.3, {y:-200, opacity:0, ease:Power1.easeIn}, index * 0.05)
		// 	});
		// 	$('.page-container').remove();
		// 	$('#magic-cursor').removeClass("light-content");
		// 	$('#header-container').removeClass("light-content");
		// });
		
		
		//Load Project Page
		// $('a.ajax-link-project').on('click', function() {
		// 	$("body").addClass("show-loader");
		// 	TweenMax.to($("#page-action-holder-left"), 0.2, {opacity:0, delay:0, ease:Power2.easeInOut});
		// 	$(".scrolltotop").removeClass('page-up');
		// 	setTimeout( function(){
		// 		$("body").addClass("load-project-page");
		// 	} , 100 );	
		// 	TweenMax.to($("#footer-container"), 0.2, {opacity:0, ease:Power0.easeNone});
		// 	setTimeout( function(){
		// 		$(".big-title-caption").remove();
		// 		$(".title-caption-tooltip").remove();
		// 	} , 200 );
		// 	$('#magic-cursor').removeClass("light-content");
		// 	$('#header-container').removeClass("light-content");				
		// });	
		
		
		//Load Next Project Page
		// $('a.next-ajax-link-project').on('click', function() {
		// 	$("body").addClass("show-loader");
		// 	$(".scrolltotop").removeClass('page-up');
		// 	$("#project-nav").addClass("active");
		// 	TweenMax.to($("footer"), 0.3, {opacity:0, delay:0.2, ease:Power2.easeInOut});
		// 	TweenMax.to($("#project-nav"), 0.6, {y:-100, ease:Power2.easeInOut});
		// 	TweenMax.to($(".next-project-title"), 0.3, {opacity:0, delay:0.1, ease:Power2.easeInOut});
		// 	$(".big-title-caption").remove();
		// 	$(".title-caption-tooltip").remove();
		// 	$('.page-container').remove();
		// 	setTimeout( function(){	
		// 		TweenMax.to($("#main"), 0.3, {opacity:0, ease:Power0.ease});				
		// 	} , 30 );
		// 	$('#magic-cursor').removeClass("light-content");
		// 	$('#header-container').removeClass("light-content");								
		// });
		
		
        //Load Page From Menu

        // coming

		// $('.ajax-link-menu').on('click', function() {							
		// 	$("body").addClass("show-loader");
		// 	TweenMax.set($("nav ul li a"), {opacity:0.3});
			
			
		// 	var tl = new TimelineLite();
		// 	$(".menu-timeline").each(function(index, element) {
		// 		tl.to(element, 0.25, {y:-80, opacity:0, ease:Power1.easeIn }, index * 0.05)
		// 	});
		// 	$('#menu-burger').removeClass("open");
		// 	$(".big-title-caption").remove();
		// 	$(".title-caption-tooltip").remove();
		// 	$('.page-container').remove();
		// 	$('#magic-cursor').removeClass("light-content");
		// 	$('#header-container').removeClass("light-content");
		// });
		
		
		//Overlay Menu
		$('#burger-wrapper, #close-menu').on('click', function() {			
			// $('header').toggleClass('open');			
			// $('#menu-burger').toggleClass('open');
			// $('#menu-overlay').toggleClass('active');
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {	
					
					//Fade Out Content					
					var tlThumbs = new TimelineLite();
					$("#portfolios .in-view .item-wrap").each(function(index, element) {
						tlThumbs.to(element, 0.2, {y:-150, opacity:0, ease:Power1.easeIn}, index * 0.05)
					});					
					TweenMax.set($("#portfolios .item-wrap"), {y: -200, opacity:0, delay:0.4});
					
					TweenMax.to($(".hero-title"), 0.3, {force3D:true, y: -100, opacity:0, delay:0.1, ease:Power2.easeIn});
					TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.3, {force3D:true, y: -100, opacity:0, delay:0.15, ease:Power2.easeIn});					
					TweenMax.set($(".hero-title, .hero-subtitle, #hero-caption .entry-meta"), {y: 100, opacity:0, delay:0.5});	
					TweenMax.to($("#hero-bg-wrapper"), 0.3, {force3D:true, opacity:0, delay:0.15, ease:Power2.easeIn});
					
					TweenMax.to($("footer, #page-bottom, #project-nav, #inner-main-content"), 0.3, {force3D:true, y: -50, opacity:0, delay:0.1, ease:Power2.easeIn});
					TweenMax.set($("footer, #page-bottom, #project-nav, #inner-main-content"), {y: 50, opacity:0, delay:0.4});		
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline"), {y: 100, opacity:0});
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.5, ease:Power3.easeOut}, index * 0.1)
					});
						
				} else {					
					
					//Fade Out Navigation Lists					
					var tlMenu = new TimelineLite();
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-100, opacity:0, ease:Power1.easeOut }, index * 0.05)
					});	
					
					TweenMax.to($(".hero-title"), 0.3, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
					TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.3, {force3D:true, y: 0, opacity:1, delay:0.55, ease:Power2.easeOut});
					TweenMax.to($("#hero-bg-wrapper"), 0.6, {force3D:true, opacity:1, delay:0.35, ease:Power2.easeOut});
					//Fade In Content					
					var tlThumbs = new TimelineLite();
					tlThumbs.set($("#portfolios .item-wrap"), {y: 200, opacity:0});
					$("#portfolios .in-view .item-wrap").each(function(index, element) {
						tlThumbs.to(element, 0.5, {y:0, opacity:1, delay:0.5, ease:Power3.easeOut}, index * 0.05)
					});	
					TweenMax.to($("#portfolios .item-wrap"), 0.3, {force3D:true, y: 0, opacity:1, delay:0.8, ease:Power3.easeOut});			
					
					TweenMax.to($("footer, #page-bottom, #project-nav, #inner-main-content"), 0.3, {force3D:true, y: 0, opacity:1, delay:0.75, ease:Power2.easeOut});
					
					setTimeout( function(){
						$('nav li.has-sub').removeClass('open');
						$('nav li.has-sub').find('ul').slideUp();
					} , 500 );
				}							
			} , 20 );
		});
		
		
		
		//Overlay Menu
		$('.open-filters, .open-search, #close-sidebar').on('click', function() {			
			$('#sidebar-overlay').toggleClass('active');
			setTimeout( function(){			
				if ($('#sidebar-overlay').hasClass("active")) {	
					
					TweenMax.to($(".item-contents"), 0.6, {force3D:true, scale: 0.8, opacity:0.2, delay:0, ease:Power2.easeInOut});
					TweenMax.to($("#mains.project"), 0.6, {force3D:true, scale: 0.95, opacity:0.2, delay:0, ease:Power2.easeInOut});
					TweenMax.to($("#blog"), 0.6, {force3D:true, scale: 0.95, opacity:0.1, delay:0, ease:Power2.easeInOut});
					TweenMax.to($(".single-post #mains, .page-template-blog-page #mains"), 0.6, {force3D:true, scale: 0.95, opacity:0.1, delay:0, ease:Power2.easeInOut});
					
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".sidebar-timeline, .jssocials-share, .search-box"), {y: 60, opacity:0});
					$(".sidebar-timeline, .jssocials-share, .search-box").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
					});
						
				} else {					
					
					TweenMax.to($(".item-contents"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.1, ease:Power2.easeInOut});
					TweenMax.to($("#mains.project"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.1, ease:Power2.easeInOut});
					TweenMax.to($("#blog"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.1, ease:Power2.easeInOut});
					TweenMax.to($(".single-post #mains, .page-template-blog-page #mains"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.1, ease:Power2.easeInOut});
					
					//Fade Out Navigation Lists					
					var tlMenu = new TimelineLite();
					$(".sidebar-timeline, .jssocials-share, .search-box").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-60, opacity:0, ease:Power1.easeOut }, index * 0.05)
					});	
				}							
			} , 20 );
		});
		
		
		
		//Drop Down Navigation
		$('nav li.has-sub > a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
		
		
		setTimeout( function(){
			$('#blog-nav').on('mouseenter', function() {
					$("#blog-nav").addClass("from-bottom");			
			}).on('mouseleave', function() {
				$("#blog-nav").addClass("from-bottom-end");
				setTimeout( function(){
					$("#blog-nav").removeClass("from-bottom");
					$("#blog-nav").removeClass("from-bottom-end");
				} , 100 );
			});	
		} , 500 );
		
		// add a label element to CF7 input elements for the underline highlight effect
		$( '.wpcf7-form-control-wrap' ).each( function() {
			
			if( $( this ).has('label').length <= 0 ){
				$( this ).append( '<label class="input_label"></label>' );
			}
		});
		
		if( $('.vc_row').length <= 0 ){
			if( ($('#portfolios-wrap').length <= 0 ) && ($('.post-content-full').length <= 0 ) && ($('#blog').length <= 0 )){
				$('#main-content').addClass('without-row');
			}
		}
		
		if( $('.post-content-full').length > 0 ){
			$('#hero').addClass('title-bg');
		}		
		
		
	}// End First Load
	
	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
	
		$('body').removeClass('hidden');
		
		TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});		
		TweenMax.to($("#page-action-holder-left"), 0.3, {opacity:1, ease:Power2.easeOut});
		if( $('#hero').hasClass("has-image")) {	
			TweenMax.to($("#hero-bg-image"), 0.7, {force3D:true, scale:1.05 , opacity:1, delay:0.6, ease:Power2.easeOut});
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.75, ease:Power2.easeOut});
		} else {
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle, #hero-caption .entry-meta"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.75, ease:Power2.easeOut});
		}
		if ($('#hero-bg-image').hasClass("light-content")) {
			$('#hero-caption').addClass('light-content');
			setTimeout(function(){
				$('#magic-cursor').addClass('light-content');
			} , 700 );
			$('header').addClass('transparent');
			setTimeout(function(){
				$('#header-container, #menu-overlay, #page-bottom').addClass('light-content');
			} , 600 );
		}
		
		var tlThumbs = new TimelineLite();
		$("#portfolios .item-wrap").each(function(index, element) {
			tlThumbs.to(element, 0.5, {y:0, opacity:1, delay:0.1, ease:Power2.easeOut}, index * 0.1)
		});
		
		if( $('.load-project-page').length > 0 ){
			setTimeout( function(){
				$('.page-container').remove();
			} , 150 );
		}
			
		setTimeout( function(){	
			$('body').removeClass("load-project-page")
		} , 850 );
		
		setTimeout( function(){	
			$('body').removeClass("show-loader")
		} , 600 );
		
		TweenMax.set($("#inner-main-content"), {y: 80, opacity:0, delay:0});		
		var tlRow = new TimelineLite();
		$("#inner-main-content").each(function(index, element) {
			tlRow.to(element, 0.5, {force3D:true, opacity:1, y:0, delay:0.8, ease:Power3.easeOut}, index * 0.1)
		});		
		
	
	}// End Lazy Load		



/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/
	
	function HeroSection() {
		
		if( $('#hero').length > 0 ){
						
			if( $('#hero').hasClass("has-image")) {	
			
				// Hero Caption Options			
				var HeroCaption = document.querySelector('#hero-caption');
				var HeroImage = document.querySelector('#hero-image-parallax');
				var windowScrolled;
				function HeroParallaxScroll() {	
					windowScrolled = window.pageYOffset || document.documentElement.scrollTop;				
					if ($('#hero-styles').hasClass("parallax-onscroll")) {		
						TweenMax.to(HeroCaption, 0.1, {y: windowScrolled / 4});	
						TweenMax.to(HeroImage, 0.1, {y: windowScrolled / 5});						
					}
					if ($('#hero-styles').hasClass("opacity-onscroll")) {
						HeroCaption.style.opacity =  (1 - (windowScrolled/15) / 40);
					}				
				}
				
				$(window).on('scroll', HeroParallaxScroll);
					
				$('a.ajax-link, a.ajax-link-menu').on('click', function() {
					$(window).off('scroll', HeroParallaxScroll);
				});
			
			}
			
			
			// Hero Image Parallax
			if( $('#hero').hasClass("has-image")) {				
				var timeout;
				$(window).resize(changePersective);				
				changePersective();				
				function changePersective(){
					TweenMax.set('#hero-bg-wrapper', {perspective: $('body').width()});
				}
				$('#hero').mousemove(function(e){
					if(timeout) clearTimeout(timeout);
					setTimeout(callParallaxHero.bind(null, e));			
				});				
				function callParallaxHero(e){
					parallaxItHero(e, '#hero-bg-image', 0); //5
					moveItHero(e, '#hero-bg-image', - 30); //80
				}				
				function parallaxItHero(e, target, movement){
					var $this = $('#hero-bg-wrapper');
					var relX = e.pageX - $this.offset().left;
					var relY = e.pageY - $this.offset().top;					
					TweenMax.to(target, 1, {
						rotationY: (relX - $this.width()/1.5) / $this.width() * movement,
						rotationX: (relY - $this.height()/2) / $this.height() * movement,
					})
				}				
				function moveItHero(e, target, movement){
					var $this = $('#hero-bg-wrapper');
					var relX = e.pageX - $this.offset().left;
					var relY = e.pageY - $this.offset().top;					
					TweenMax.to(target, 1, {
						x: (relX - $this.width()/2) / $this.width() * movement,
						y: (relY - $this.height()/2) / $this.height() * movement,
					})
				}
				function HeroChangeHeaderColor() {	
				
					var scroll = $(window).scrollTop();
					
					if ($('#hero-bg-image').hasClass("light-content")) {
						
						if (scroll >= $("#hero").height() - 80) {					
							$('#magic-cursor, #header-container').removeClass('light-content');
						} else { 
							$('#magic-cursor, #header-container').addClass('light-content');
						}
					
						if (scroll >= 80) {					
							$('#page-bottom').removeClass('light-content');
						} else { 
							$('#page-bottom').addClass('light-content');
						}
					
					}
						
				}
				
				$(window).on('scroll', HeroChangeHeaderColor);
				
				$('a.ajax-link, a.ajax-link-menu').on('click', function() {
					$(window).off('scroll', HeroChangeHeaderColor);
				});
			}
			
		
		}
		
	}//End Hero Section
	
	

/*--------------------------------------------------
Function Fit Thumb Screen 
---------------------------------------------------*/

	function FitThumbScreen() {			
			
		$("body").find(".page-container").each(function() {
			$("#clone-image").append($(this))
		});
			
		console.clear();

		var root  = document.documentElement;
		var body  = document.body;
		var pages = document.querySelectorAll(".page-thumb");
		var tiles = document.querySelectorAll(".item-image");
		
		for (var i = 0; i < tiles.length; i++) {  
		  addListeners(tiles[i], pages[i]);
		}
		
		function addListeners(tile, page) {
		  
		  tile.addEventListener("click", function() {
			$(this).parent().parent().addClass('above');
			TweenMax.set('.items.above',{opacity: 1});			
			setTimeout( function(){
				TweenMax.to('.items', 0.3,{opacity: 0, delay: 0.2, ease:Power2.easeInOut});
				TweenMax.to('.items .item-caption', 0.2,{opacity: 0, ease:Power2.easeIn});
				TweenMax.to('.items .items-cat', 0.2,{opacity: 0, ease:Power2.easeIn});
			} , 0 ); 
			
			setTimeout( function(){				
				animateHero(tile, page);
			} , 50 ); 
		  });
		  
		  page.addEventListener("click", function() {
			$('.items').removeClass('above');
				TweenMax.to('.items', 0.3,{opacity: 1, delay:0.3, ease:Power2.easeOut});
				TweenMax.to('.items .item-caption', 0.2,{opacity: 1, delay:0.6, ease:Power2.easeOut});
				TweenMax.to('.items .items-cat', 0.2,{opacity: 1, delay:0.4, ease:Power2.easeOut});
			animateHero(page, tile);
		  });  
		}
		
		function animateHero(fromHero, toHero) {
			
		  var clone = fromHero.cloneNode(true);
			  
		  var from = calculatePosition(fromHero);
		  var to = calculatePosition(toHero);
		  
		  TweenLite.set([fromHero, toHero], { visibility: "hidden" });
		  TweenLite.set(clone, { position: "absolute", margin: 0 });
		  
		  body.appendChild(clone);  
			  
		  var style = {
			x: to.left - from.left,
			y: to.top - from.top,
			width: to.width,
			height: to.height,
			autoRound: false,
			ease: Power2.easeInOut,
			onComplete: onComplete
		  };
		   
		  TweenLite.set(clone, from);  
		  TweenLite.to(clone, 0.6, style)
			
		  function onComplete() {
			
			TweenLite.set(toHero, { visibility: "visible" });
			body.removeChild(clone);
		  }
		}
		
		function calculatePosition(element) {
			
		  var rect = element.getBoundingClientRect();
		  
		  var scrollTop  = window.pageYOffset || root.scrollTop  || body.scrollTop  || 0;
		  var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;
		  
		  var clientTop  = root.clientTop  || body.clientTop  || 0;
		  var clientLeft = root.clientLeft || body.clientLeft || 0;
			
		  return {
			top: Math.round(rect.top + scrollTop - clientTop),
			left: Math.round(rect.left + scrollLeft - clientLeft),
			height: rect.height,
			width: rect.width,
		  };
		}
		
	}// End First Load



/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/
	
	function Portfolio() {
		
		var $container = $('#portfolios');
		
		$container.packery({
			itemSelector: '.items',
			gutter:0,
			transitionDuration: "0.5s"
		});
		
		$('#filters a').on('click', function() {
			$('#filters a').removeClass('active');
			$(this).addClass('active');
			$('.items').addClass('item-margins');
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector }, function( $changedItems, instance ) {
			  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
			  instance.$filteredAtoms.addClass('is-filtered');
			});		
			return false;
		});
		
		$('#filters #all').on('click', function() {
			$('.items').removeClass('item-margins');
		});
		
		function parallax_item() {				
			if ($(window).width() > 1024) {		
				$('.item.wide').each(function(){					
					var difference = $(window).scrollTop() - $(this).offset().top;
					var half = (difference / 10) + 'px',
					transform = 'translate3d( 0, ' + half + ',0)';				
					$(this).css('transform', transform);			
				});
			}
		}
		
		$("#all").trigger('click');
					
		parallax_item();
	
		$(window).on('scroll load ', parallax_item);
		
		$('a.ajax-link, a.ajax-link-menu, a.ajax-link-project').on('click', function() {
			$(window).off('scroll', parallax_item);
		});
		
		
		var $animation_elements = $('.items');
		var $window = $(window);
		
		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);
		
			$.each($animation_elements, function() {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top + 50;
				var element_bottom_position = (element_top_position + element_height);
				
				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&	(element_top_position <= window_bottom_position)) {
					$element.addClass('in-view');						
				} else if (element_bottom_position >= window_top_position)   {
					$element.removeClass('in-view');
				} else if (element_top_position <= window_bottom_position)  {
					$element.removeClass('in-view');
				}
			});
		}		
		$window.on('scroll resize', check_if_in_view);	
		
		
		var $window = $(window),
			$portfolio = $('#portfolios');
	
		function resize() {
			if ($window.width() < 1025) {
				return $portfolio.addClass('mobile');
			}
	
			$portfolio.removeClass('mobile');
		}		
		
		//Title Reveal Hover Effect
		if( $('.title-reveal').length > 0 ){
			
			$('.items-title').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			})
			
			$('.items-title-hover').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			})
			
			setTimeout( function(){
		
			$('.items-title div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			})
			
			$('.items-title-hover div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			})
			} , 100 );
				
			$("#portfolios").find(".item-contents").each(function() {					
				$($(this)).find(".item-caption .items-cat").appendTo($(this))
			});
			
		
			var over = null,
				 out = null;
			
			$(".title-reveal .item-contents").hover(mouseOver, mouseOut);
			
			function mouseOver() {
			  
				var delay = 0;
				if (out && out.isActive()) {
					out.timeScale(3);
					delay = 0.1;
				}
			
				over = new TimelineLite({ delay: delay });
			
				$(this).find('.items-title span').each(function(index, element) {
				over.to(element, 0.2, {scale:1, x:30, opacity:0, ease:Power2.easeIn}, index * 0.01)
				});
				
				over.set($(this).find('.items-title span'), {delay:0.2, x: -30, opacity:0});
				
				$(this).find('.items-title-hover span').each(function(index, element) {
					over.to(element, 0.2, {scale:1, x:0, opacity:1, scale:1, delay:0.15, ease:Power2.easeOut}, index * 0.01)
				});
				
			}
			
			function mouseOut() {
				
				var delay = 0;
				if (over && over.isActive()) {
					over.timeScale(3);
					delay = 0.1;
				}
				
				out = new TimelineLite({ delay: delay });
				
				$(this).find('.items-title span').each(function(index, element) {
					out.to(element, 0.2, {scale:1, x:0, opacity:1, scale:1, delay:0.15, ease:Power2.easeOut}, index * 0.01)
				});
				
				$(this).find('.items-title-hover span').each(function(index, element) {
					out.to(element, 0.2, {scale:1, x:30, opacity:0, ease:Power2.easeIn}, index * 0.01)
				});
				
				out.set($(this).find('.items-title-hover span'), {delay:0.3, x: -30, opacity:0});
				
			}
			
			$(".item-contents").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
			});
				
			$(".item-contents").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
		
		}		
		
		//Title Big Hover Effect
		if( $('.title-big').length > 0 ){
			
			// Portfolio Parallax
			if ($("#portfolios").hasClass("title-big")) {
                $("body").append('<div class="big-title-caption"></div>');
				$(".big-title-caption").append('<div class="outer"></div>');
				$(".big-title-caption .outer").append('<div class="inner"></div>');
                $("#portfolios").find(".items .item-caption").each(function() {
                    $(".big-title-caption .outer .inner").append($(this))
                }), $("#portfolios").find(".items a").on("mouseenter", function(e) {
                    
					TweenMax.to($(".big-title-caption .outer .inner").children().children(".items-title").eq($(this).parent().index()), 0.2, {force3D:true, opacity:1,  y: 0, delay:0.15, ease:Power2.easeOut});
					TweenMax.to($(".big-title-caption .outer .inner").children().children(".items-cat").eq($(this).parent().index()), 0.2, {force3D:true, opacity:1,  y: 0, delay:0.25, ease:Power2.easeOut});
					
                }).on("mouseleave", function(e) {
                    
					TweenMax.to($(".big-title-caption .outer .inner").children().children(".items-title").eq($(this).parent().index()), 0.2, {force3D:true, opacity:0,  y: -50, ease:Power2.easeIn});
					TweenMax.to($(".big-title-caption .outer .inner").children().children(".items-cat").eq($(this).parent().index()), 0.2, {force3D:true, opacity:0,  y: -30, delay:0.05, ease:Power2.easeIn});
					TweenMax.set($(".big-title-caption .outer .inner").children().children(".items-title").eq($(this).parent().index()), { y: 50, opacity:0, delay:0.2});
					TweenMax.set($(".big-title-caption .outer .inner").children().children(".items-cat").eq($(this).parent().index()), { y: 30, opacity:0, delay:0.25});
					
                }).on("click", function() {
                    $(".big-title-caption .outer .inner").addClass("hover")
                });
                $(".items-title-hover").remove();
            }
			
			
			
			$(".item-contents").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
			});
				
			$(".item-contents").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
				
		}
		
		//Title Floating Tooltip
		if( $('.title-tooltip').length > 0 ){
			
			$(".items-title-hover").remove();
			
			$("#ball").append('<div class="title-caption-tooltip"></div>');
			$("#portfolios").find(".items .item-caption").each(function() {
				$(".title-caption-tooltip").append($(this))
			}), $("#portfolios").find(".items a").on("mouseenter", function(e) {
				$(".title-caption-tooltip").children().eq($(this).parent().index()).addClass("hover")
			}).on("mouseleave", function(e) {
				$(".title-caption-tooltip").children().eq($(this).parent().index()).removeClass("hover")
			}).on("click", function() {
				$(".title-caption-tooltip").children().eq($(this).parent().index()).removeClass("hover")
			});
			
			$(".item-contents").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{borderWidth: '0px'});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				
			});
				
			$(".item-contents").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px'});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			});
				
		}		
		
		//Title Floating Tooltip
		if( $('.title-overlay').length > 0 ){
			
			$(".items-title-hover").remove();
			
			$( ".item-image" ).wrap( "<div class='item-image-wrap'></div>" );
			
			$(".item-contents").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
			});
				
			$(".item-contents").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
				
		}
		
		$("#close-sidebar").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
		});
			
		$("#close-sidebar").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
		});
		
		
		$window
			.resize(resize)
			.trigger('resize');
		
		
		//Project Navigation
		var over = null,
		out = null;
		
		TweenLite.set(".main-subtitle", { yPercent: 100 });
		
		$(".next-project-title").hover(mouseOver, mouseOut);
		
		function mouseOver() {
			var delay = 0;
			if (out && out.isActive()) {
				out.timeScale(3);
				delay = 0.1;
			}		
			over = new TimelineLite({ delay: delay });		
			over
				.to($(".main-title"), 0.3, { yPercent: -100 }, 0)
				.fromTo(".main-subtitle", 0.3, { yPercent: 100 }, { yPercent: 0 }, 0);
		}
		
		function mouseOut() {
			var delay = 0;
			if (over && over.isActive()) {
				over.timeScale(3);
				delay = 0.1;
			}
		
			out = new TimelineLite({ delay: delay });
		
			out
				.to($(".main-subtitle"), 0.3, { yPercent: -100 }, 0)
				.fromTo($(".main-title"), 0.3, { yPercent: 100 }, { yPercent: 0 }, 0);
		}
	
	}//End Portfolio
	

/*--------------------------------------------------
Function Back To Top
---------------------------------------------------*/
	
	function BackToTop() {
		
		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 300) {
				
				$(".scrolltotop").addClass('page-up').removeClass('no-tooltip');
				$("#page-action-holder-right").removeClass('no-tooltip');
				
			} else {				
				
				$(".scrolltotop").removeClass('page-up').addClass('no-tooltip');
				$("#page-action-holder-right").addClass('no-tooltip');
			}
		});
	
	}//End Back To Top
	
	
	
/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/

	function VirtualScr() {		
		
		new SmoothScroll();

		function SmoothScroll(el) {
			var t = this, h = document.documentElement;
			el = el || window;
			t.rAF = false;
			t.target = 0;
			t.scroll = 0;
			t.animate = function() {
			t.scroll += (t.target - t.scroll) * 0.1;
			if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
			cancelAnimationFrame(t.rAF);
			t.rAF = false;}
			if (el == window) scrollTo(0, t.scroll);
			else el.scrollTop = t.scroll;
			if (t.rAF) t.rAF = requestAnimationFrame(t.animate);};
			el.onmousewheel = function(e) {
			e.preventDefault();
			e.stopPropagation();
			var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
			t.target += (e.wheelDelta > 0) ? -100 : 100;
			if (t.target < 0) t.target = 0;
			if (t.target > scrollEnd) t.target = scrollEnd;
			if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);};
			el.onscroll = function() {
			if (t.rAF) return;
			t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
			t.scroll = t.target;};
		}			
		
	}// End Virtual Scroll
	

/*--------------------------------------------------
Function Page Share
---------------------------------------------------*/	
	
	function PageShare() {
		
		if( $('#share').length > 0 ){
		
			$("#share").jsSocials({
				showLabel: false,
				showCount: false,
				shares: ["facebook", "twitter", "googleplus"]
			});
		
		}
		
	}//End PageShare
	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 500,
			items:1,			
		});
		
		$( ".slider .owl-prev" ).removeClass( "parallax-wrap" );
		$( ".slider .owl-next" ).removeClass( "parallax-wrap" );
		
		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			navSpeed: 600,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});
		
		$( ".carousel .owl-prev" ).removeClass( "parallax-wrap" );
		$( ".carousel .owl-next" ).removeClass( "parallax-wrap" );	
			
		$(".owl-prev").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
		});
			
		$(".owl-prev").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$(".owl-next").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
		});
			
		$(".owl-next").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$('.slider').on('click', function() {
			
			var $window = $(window),
				$element = $('.slider'),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2 + 20);
							
			$("html, body").animate({ scrollTop: scrollIt }, 300);
			
		});
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
			});			
			
		}
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', backgroundColor : 'rgba(0, 0, 0, 1)', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, backgroundColor : 'rgba(0, 0, 0, 0)', x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	 		
	


/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		setTimeout(function(){
			$('.has-animation').each(function() {	
				$(this).appear(function() {				
					$(this).delay($(this).attr('data-delay')).queue(function(next){
						$(this).addClass('animate-in');
						next();
					});				 		
				});		
			});
		} , 250 );		
	
	}//End AppearIteam
	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){	
			
			
			$(".video-wrapper").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				});
						
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				$("#ball").removeClass("over-movie");
				$('#ball i').remove();
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
			
			$('.video-cover').on('click', function() {
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				$(this).addClass('hidden');
				$( "#ball" ).toggleClass("pause-movie");
				setTimeout(function(){
					$(".bgvid").trigger("click");
				} , 400 );
			});
			
			var playerTop = $(".video-wrapper").offset().top
					$(window).on("scroll", function(){
						if ($(window).scrollTop() > (playerTop + $(".video-wrapper").height())){ // if user scrolls down and past the video completely
							$('#main-page-content').find('video').each(function() {
								$(this).get(0).pause();
							});
							$( "#ball" ).removeClass("pause-movie");
						}
					})  	
			
			var video = $('#myVideo');
			
			//remove default control when JS loaded
			video[0].removeAttribute("controls");
			$('.control').fadeIn(500);
			$('.caption').fadeIn(500);
		 
			//before everything get started
			video.on('loadedmetadata', function() {
					
				//set video properties
				$('.current').text(timeFormat(0));
				$('.duration').text(timeFormat(video[0].duration));
				
					
				//start to get video buffering data 
				setTimeout(startBuffer, 150);
					
				//bind video events
				$('.videoContainer').on('hover', function() {		
					$('.control').stop().fadeIn();
					$('.caption').stop().fadeIn();
				}, function() {
					if(!volumeDrag && !timeDrag){
						$('.control').stop().fadeOut();
						$('.caption').stop().fadeOut();
					}
				})
				
			});
			
			//display video buffering bar
			var startBuffer = function() {
				var currentBuffer = video[0].buffered.end(0);
				var maxduration = video[0].duration;
				var perc = 100 * currentBuffer / maxduration;
				$('.bufferBar').css('width',perc+'%');
					
				if(currentBuffer < maxduration) {
					setTimeout(startBuffer, 500);
				}
			};	
			
			//display current video play time
			video.on('timeupdate', function() {
				var currentPos = video[0].currentTime;
				var maxduration = video[0].duration;
				var perc = 100 * currentPos / maxduration;
				$('.timeBar').css('width',perc+'%');	
				$('.current').text(timeFormat(currentPos));	
			});
			
			//CONTROLS EVENTS
			//video screen and play button clicked
			video.on('click', function() { playpause(); } );
			
			var playpause = function() {
				if(video[0].paused || video[0].ended) {			
					video[0].play();
				}
				else {			
					video[0].pause();
				}
			};
		
			
			//fullscreen button clicked
			$('.btnFS').on('click', function() {
				if($.isFunction(video[0].webkitEnterFullscreen)) {
					video[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video[0].mozRequestFullScreen)) {
					video[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
			});
			
			//sound button clicked
			$('.sound').on('click', function() {
				video[0].muted = !video[0].muted;
				$(this).toggleClass('muted');
				if(video[0].muted) {
					$('.volumeBar').css('width',0);
				}
				else{
					$('.volumeBar').css('width', video[0].volume*100+'%');
				}
			});
			
			//VIDEO EVENTS
			//video canplay event
			video.on('canplay', function() {
				$('.loading').fadeOut(100);
			});
			
			//video canplaythrough event
			//solve Chrome cache issue
			var completeloaded = false;
			video.on('canplaythrough', function() {
				completeloaded = true;
			});
			
			//video ended event
			video.on('ended', function() {		
				video[0].pause();
			});
		
			//video seeking event
			video.on('seeking', function() {
				//if video fully loaded, ignore loading screen
				if(!completeloaded) { 
					$('.loading').fadeIn(200);
				}	
			});
			
			//video seeked event
			video.on('seeked', function() { });
			
			//video waiting for more data event
			video.on('waiting', function() {
				$('.loading').fadeIn(200);
			});
			
			//VIDEO PROGRESS BAR
			//when video timebar clicked
			var timeDrag = false;	/* check for drag event */
			$('.progress').on('mousedown', function(e) {
				timeDrag = true;
				updatebar(e.pageX);
			});
			$(document).on('mouseup', function(e) {
				if(timeDrag) {
					timeDrag = false;
					updatebar(e.pageX);
				}
			});
			$(document).on('mousemove', function(e) {
				if(timeDrag) {
					updatebar(e.pageX);
				}
			});
			var updatebar = function(x) {
				var progress = $('.progress');
				
				//calculate drag position
				//and update video currenttime
				//as well as progress bar
				var maxduration = video[0].duration;
				var position = x - progress.offset().left;
				var percentage = 100 * position / progress.width();
				if(percentage > 100) {
					percentage = 100;
				}
				if(percentage < 0) {
					percentage = 0;
				}
				$('.timeBar').css('width',percentage+'%');	
				video[0].currentTime = maxduration * percentage / 100;
			};	
		
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
		}
		
	}// End PlayVideo		
	
	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
			
		function LoadViaAjax() {		
			
			FirstLoad();		
			LazyLoad();		
			HeroSection();
			FitThumbScreen();
			Portfolio();		
			BackToTop();
			PageShare();
			Sliders();
			JustifiedGrid();
			Lightbox();
			AppearIteam();
			PlayVideo();
			InitContactMap();
		
		}//End Load Via Ajax
		
		
/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/	

	function AjaxLoad() {		
		
		var mouse = { x: 0, y: 0 };
		var pos = { x: 0, y: 0 };
		var ratio = 0.25;			
		var active = false;			
		var ball = document.getElementById("ball");
		var ballloader = document.getElementById("ball-loader");
		
		
		TweenLite.set(ball, { xPercent: -50, yPercent: -50 });
		
		document.addEventListener("mousemove", mouseMove);
		
		function mouseMove(e) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			mouse.x = e.pageX;
			mouse.y = e.pageY - scrollTop;
		}
		
		TweenLite.ticker.addEventListener("tick", updatePosition);
		
		function updatePosition() {
			if (!active) {
				pos.x += (mouse.x - pos.x) * ratio;
				pos.y += (mouse.y - pos.y) * ratio;
		
				TweenLite.set(ball, { x: pos.x, y: pos.y });
			}
		}
		
		$(".parallax-wrap").mouseleave(function(e) {
			TweenMax.to(this, 0.3, { scale: 1 });
			TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '2px', opacity:1 });
			TweenMax.to(ballloader, 0.3, { scale: 1, borderWidth: '2px', top: 0, left: 0 });
			TweenMax.to($( this ).children(), 0.3,{scale:1, x: 0, y:0});
			active = false;
		});
		
		
		$(".parallax-wrap").mouseenter(function(e) {
			TweenMax.to(this, 0.3, { scale: 2 });
			TweenMax.to(ball, 0.3, { scale: 2, borderWidth: '1px',opacity:.2 });
			TweenMax.to(ballloader, 0.3, { scale: 2, borderWidth: '1px', top: 1, left: 1});
			TweenMax.to($( this ).children(), 0.3,{scale:0.5});
			active = true;
		});
		
		$(".parallax-wrap").mousemove(function(e) {
			parallaxCursor(e, this, 2);
			callParallax(e, this);
		});
		
		function callParallax(e, parent) {
			parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
		}
		
		function parallaxIt(e, parent, target, movement) {
			var boundingRect = parent.getBoundingClientRect();
			var relX = e.pageX - boundingRect.left;
			var relY = e.pageY - boundingRect.top;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			
			TweenMax.to(target, 0.3, {
				x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
				y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
				ease: Power2.easeOut
			});
		}
		
		function parallaxCursor(e, parent, movement) {
			var rect = parent.getBoundingClientRect();
			var relX = e.pageX - rect.left;
			var relY = e.pageY - rect.top;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
			pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
			TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
		}
		
		$(".hide-ball").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale: 2, opacity:0});
		});			
		$(".hide-ball").mouseleave(function(e) {
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, opacity:1});
		});
		
		$(".link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth:"0px",scale:3,backgroundColor:"rgba(0, 0, 0, 1)",opacity:.05});
		});			
		$(".link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
		});
		
		jQuery(document).ready(function(){
			  var isAnimating = false,
				newLocation = '';
				firstLoad = false;
			  
			  //trigger smooth transition from the actual page to the new one 
			  $('main').on('click', '[data-type="page-transition"]', function(event){
				event.preventDefault();
				//detect which page has been selected
				var newPage = $(this).attr('href');
				//if the page is not already being animated - trigger animation
				if( !isAnimating ) changePage(newPage, true);
				firstLoad = true;
			  });
			
			  //detect the 'popstate' event - e.g. user clicking the back button
			  $(window).on('popstate', function() {
				if( firstLoad ) {
				  /*
				  Safari emits a popstate event on page load - check if firstLoad is true before animating
				  if it's false - the page has just been loaded
				  */
				  var newPage = location.href;

				  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
				}
				firstLoad = true;
				});
			
				function changePage(url, bool) {
				isAnimating = true;
				// trigger page animation
				$('body').addClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					loadNewContent(url, bool);
				  newLocation = url;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
				//if browser doesn't support CSS transitions
				if( !transitionsSupported() ) {
				  loadNewContent(url, bool);
				  newLocation = url;
				}
				}
			
				function loadNewContent(url, bool) {
					url = ('' == url) ? 'index.html' : url;
				
				var section = $('<div class="cd-main-content "></div>');
						
					
				section.load(url+' .cd-main-content > *', function(event){
				  // load new content and replace <main> content with the new one
				  
				  	$('main').html(section);
				  
				 	var clapat_title = event.match(/<title[^>]*>([^<]+)<\/title>/)[1];
					$('head title').html( clapat_title );
				  
					
					$('html, body').scrollTop(0);
				  
				  //if browser doesn't support CSS transitions - dont wait for the end of transitions
				  var delay = ( transitionsSupported() ) ? 30 : 0;
				  setTimeout(function(){
					//wait for the end of the transition on the loading bar before revealing the new content				
					$('body').removeClass('page-is-changing');
					$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					  isAnimating = false;
					  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
					})
				
				LoadViaAjax();
				
				$(".parallax-wrap").mouseleave(function(e) {
					TweenMax.to(this, 0.3, { scale: 1 });
					TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '2px', opacity:1 });
					TweenMax.to(ballloader, 0.3, { scale: 1, borderWidth: '2px', top: 0, left: 0 });
					TweenMax.to($( this ).children(), 0.3,{scale:1, x: 0, y:0});
					active = false;
				});
				
				
				$(".parallax-wrap").mouseenter(function(e) {
					TweenMax.to(this, 0.3, { scale: 2 });
					TweenMax.to(ball, 0.3, { scale: 2, borderWidth: '1px',opacity:.2 });
					TweenMax.to(ballloader, 0.3, { scale: 2, borderWidth: '1px', top: 1, left: 1});
					TweenMax.to($( this ).children(), 0.3,{scale:0.5});
					active = true;
				});
				
				$(".parallax-wrap").mousemove(function(e) {
					parallaxCursor(e, this, 2);
					callParallax(e, this);
				});
				
				function callParallax(e, parent) {
					parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
				}
				
				function parallaxIt(e, parent, target, movement) {
					var boundingRect = parent.getBoundingClientRect();
					var relX = e.pageX - boundingRect.left;
					var relY = e.pageY - boundingRect.top;
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					
					TweenMax.to(target, 0.3, {
						x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
						y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
						ease: Power2.easeOut
					});
				}
				
				function parallaxCursor(e, parent, movement) {
					var rect = parent.getBoundingClientRect();
					var relX = e.pageX - rect.left;
					var relY = e.pageY - rect.top;
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
					pos.y = rect.top + rect.height / 2  + (relY - rect.height / 2 - scrollTop)  / movement ;
					TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
				}
				
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, opacity:1});
				
				$(".hide-ball").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '1px', scale: 2, opacity:0});
				});			
				$(".hide-ball").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, opacity:1});
				});
				
				$(".link").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth:"0px",scale:3,backgroundColor:"rgba(0, 0, 0, 1)",opacity:.05});
				});			
				$(".link").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
				});
				
				if( !transitionsSupported() ) isAnimating = false;
				  }, delay);			  
				  if(url!=window.location && bool){
					window.history.pushState({path: url},'',url);
				  }
					});
			  }
			
			  function transitionsSupported() {
				return $('html').hasClass('csstransitions');
			  }
			});
			
		
	}// End Ajax Load
	
		
		
});

	
/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/

	function ContactMap() {

		if( jQuery('#map_canvas').length > 0 ){

			var map_marker_image 	= 'images/marker.html';
			var map_address 		= 'New York City'
			var map_zoom			= 16;
			var marker_title 		= 'Hello Friend!';
			var marker_text			= 'Here we are. Come to drink a coffee!';
			var map_type			= google.maps.MapTypeId.SATELLITE;

			if( typeof ClapatMapOptions != 'undefined' ){

				map_marker_image 	= ClapatMapOptions.map_marker_image;
				map_address 		= ClapatMapOptions.map_address;
				map_zoom			= Number(ClapatMapOptions.map_zoom);
				marker_title 		= ClapatMapOptions.marker_title;
				marker_text			= ClapatMapOptions.marker_text;
				if( ClapatMapOptions.map_type == 0 ){

					map_type = google.maps.MapTypeId.SATELLITE;
				}
				else{

					map_type = google.maps.MapTypeId.ROADMAP;
				}

			}

			var newstyle = [{
							featureType: "all",
							elementType: "labels.text.fill",
							stylers: [{
								saturation: 36
							}, {
								color: "#333333"
							}, {
								lightness: 40
							}]
						}, {
							featureType: "all",
							elementType: "labels.text.stroke",
							stylers: [{
								visibility: "on"
							}, {
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "all",
							elementType: "labels.icon",
							stylers: [{
								visibility: "off"
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.fill",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 17
							}, {
								weight: 1.2
							}]
						}, {
							featureType: "administrative.locality",
							elementType: "labels.text",
							stylers: [{
								color: "#8d8d8d"
							}, {
								weight: "0.35"
							}]
						}, {
							featureType: "landscape",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "poi",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "poi.park",
							elementType: "geometry",
							stylers: [{
								color: "#dedede"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.fill",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 17
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 29
							}, {
								weight: .2
							}]
						}, {
							featureType: "road.arterial",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 18
							}]
						}, {
							featureType: "road.local",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "transit",
							elementType: "geometry",
							stylers: [{
								color: "#f2f2f2"
							}, {
								lightness: 19
							}]
						}, {
							featureType: "water",
							elementType: "geometry",
							stylers: [{
								color: "#e9e9e9"
							}, {
								lightness: 17
							}]
					}];
						
			var settings = {
				zoom: map_zoom,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false,
				mapTypeId: map_type,
				styles: newstyle
			};


			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; font-weight:600; margin-bottom:0px;"><strong>' + marker_title + '</strong></h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">' + marker_text + '</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var companyImage = new google.maps.MarkerImage(map_marker_image,
				new google.maps.Size(58,63),
				// <!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)
				// <!-- Position of the marker -->
			);

			var latitude = 43.270441;
			var longitude = 6.640888;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address':map_address}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {

					map.setCenter(results[0].geometry.location);

					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();

					var companyPos = new google.maps.LatLng(latitude, longitude);
					var companyMarker = new google.maps.Marker({
										position: companyPos,
										map: map,
										icon: companyImage,
										title:"Our Office",
										zIndex: 3});
									google.maps.event.addListener(companyMarker, 'click', function() {
										infowindow.open(map,companyMarker);
									});
				}
			});

		}

		return false

	} // End ContactMap

	function InitContactMap() {

		if( jQuery('#map_canvas').length > 0 ){

			if (typeof google != 'undefined' && typeof google.maps != 'undefined'){

				// google maps already loaded, call the function which draws the map
				ContactMap();

			} else {

				var map_api_key = '';
				if( typeof ClapatMapOptions != 'undefined' ){
					map_api_key = 'key=' + ClapatMapOptions.map_api_key;
				}
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
							'&callback=ContactMap';
				document.body.appendChild(script);
			}

		}
	} // End InitContactMap

