$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
	scrollTarget  : target,
	offsetTop     : 50,
	duration      : 500,
	easing        : 'swing'
  }, options);
  return this.each(function(){
	var scrollPane = $(this);
	var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
	var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - settings.offsetTop;
	scrollPane.animate({scrollTop : scrollY }, settings.duration, settings.easing, function(){
		if (typeof callback == 'function') { callback.call(this); }
	});
  });
}

var vCard = function(){

	var settings = {
		mainElem       : '.main',
		pushNavTrigger : '.push-nav-trigger',
		pushNavElem    : '.push-nav',
		portfolioElem  : '.portfolio',
		contactElem : '.contact-form'
	},

	init = function(){
		if( !isWindowfallback() && !isMobile() ) {
			pageScroll();
			animateElement('viewing-page-1');
		}
		else {
			for(var i = 1; i <= 6; i++){
				animateElement('viewing-page-'+i);
			}
		}
		
		pushNav();
		initAnimate();
		porfolio();
		bgMove();
		contactForm();
	},

	bgMove = function(){
		var parts = $('section');
		parts.mousemove(function(e) {
			var speed = $(this).data('speed') === undefined ? 6 : $(this).data('speed'),
			amountMovedX = (e.pageX * -1 / speed),
			amountMovedY = (e.pageY * -1 / speed),
			coords = amountMovedX + 'px ' + amountMovedY + 'px';

			$(this).css({ backgroundPosition: coords });
		});
	},

	contactForm = function(){
		$(settings.contactElem).submit(function(event) {
			var fields = [ '#frm-name', '#frm-email', '#frm-msg' ],
			totalFields = fields.length,
			index,
			error = false;

			for(index = 0; index < totalFields; index++){
				if( $(fields[index]).val().length == 0 ) {
					$(fields[index]).addClass('error-field');
					error = true;
				}
				else
					$(fields[index]).removeClass('error-field');
			}

			if(error === true) return false;
			else {
				alert('Trigger :)');
				return false;
			}

		});
	},

	isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('html').addClass('mobile-view');
			return true;
		}
		else { 
			$('html').removeClass('mobile-view');
			return false;
		}
	},

	isWindowfallback = function(){
		if($(window).width() <= 768) {
			$('html').addClass('mobile-view');
			return true;
		}
		else {
			$('html').removeClass('mobile-view');
			return false;
		}
	},

	initAnimate = function(){
		$('.emp-data, .ed-data').find('li').each(function(){
			$(this).addClass('pre-animate');
		});

		$('.chart, .portfolio .controls li, .contact-form').addClass('pre-animate');
	},

	animateElement = function(page){
		switch(page){

			case 'viewing-page-1':
				$('.overview .profile-picture, .overview h1').removeClass('pre-animate');
				$('.overview .profile-picture').addClass('animate0 bounceInDown');
				$('.overview h1').addClass('fadeInUp animate1');
				var delay = setTimeout(function(){
						$('.overview .profile-picture').removeClass('animate0 bounceInDown');
						$('.overview h1').removeClass('fadeInUp animate1');
					}, 1000);
			break;

			case 'viewing-page-2':
				var animCount = 0;
				$('.emp-data').find('li').each(function(index, el) {
					var _this = $(this),
					classes = 'animate'+animCount+' fadeInUp',
					delay = setTimeout(function(){
						_this.removeClass(classes);
					}, 1000);
					_this.removeClass('pre-animate');
					_this.addClass(classes);
					animCount++;
				});
			break;

			case 'viewing-page-3':
				var animCount = 0;
				$('.ed-data').find('li').each(function(index, el) {
					var _this = $(this),
					classes = 'animate'+animCount+' fadeInLeft',
					delay = setTimeout(function(){
						_this.removeClass(classes);
					}, 1000);
					_this.removeClass('pre-animate');
					_this.addClass(classes);
					animCount++;
				});
			break;

			case 'viewing-page-4':
				$('.chart').easyPieChart({
		            scaleColor:false,
		            barColor: '#008CBA',
		            lineWidth:21,
		            trackColor:'#dddddd',
		            lineCap:'butt',
		            animate:1000,
		            size:130
		        });

				var animCount = 0;
		        $('.chart').each(function(){
		        	var _this = $(this),
		        	classes = 'animate'+animCount+' fadeInUp';
		        	_this.removeClass('pre-animate');
					_this.addClass(classes);
					setTimeout(function(){
						_this.removeClass(classes);
					}, 1000);
					animCount++;
				});
			break;

			case 'viewing-page-5':

				var animCount = 0;
		        $('.portfolio .controls li').each(function(){
		        	var _this = $(this),
		        	classes = 'animate'+animCount+' slideInRight';
		        	_this.removeClass('pre-animate');
					_this.addClass(classes);
					setTimeout(function(){
						_this.removeClass(classes);
					}, 1000);
					animCount++;
				});
			break;

			case 'viewing-page-6':

				$('.contact-form').removeClass('pre-animate');
				$('.contact-form').addClass('animate0 rollIn');
				var delay = setTimeout(function(){
						$('.contact-form').removeClass('animate0 rollIn');
					}, 1000);

			break;

		}
	},

	animateElementPrepare = function(page){
		switch(page){

			case 'viewing-page-1':
				setTimeout(function(){
					$('.overview .profile-picture, .overview h1').addClass('pre-animate');
				}, 1000);
			break;

			case 'viewing-page-2':
				setTimeout(function(){
					$('.emp-data').find('li').each(function(){
						$(this).addClass('pre-animate');
					});
				}, 1000);
			break;

			case 'viewing-page-3':
				setTimeout(function(){
					$('.ed-data').find('li').each(function(){
						$(this).addClass('pre-animate');
					});
				}, 1000);
			break;

			case 'viewing-page-4':
				setTimeout(function(){
					$('.chart').each(function(){
						$(this).addClass('pre-animate');
					});
				}, 1000);
			break;

			case 'viewing-page-5':
				setTimeout(function(){
					$('.portfolio .controls li').each(function(){
						$(this).addClass('pre-animate');
					});
				}, 1000);
			break;

			case 'viewing-page-6':
				setTimeout(function(){
					$('.contact-form').addClass('pre-animate');
				}, 1000);
			break;

		}
	}, 

	pageScroll = function(){
		if( $(settings.mainElem).length > 0 && $(settings.mainElem).find('section').length > 0 && $.isFunction($.fn.onepage_scroll) ){
			
			var triggerElem = $('body');

			$(settings.mainElem).onepage_scroll({
				sectionContainer: "section",
				loop: true,
				responsiveFallback: 768,
				pagination: false,
				beforeMove: function(){
					if( triggerElem.hasClass('viewing-page-2') ){
						animateElementPrepare('viewing-page-2')
					}
					else if( triggerElem.hasClass('viewing-page-1') ){
						animateElementPrepare('viewing-page-1');
					}
					else if( triggerElem.hasClass('viewing-page-3') ){
						animateElementPrepare('viewing-page-3');
					}
					else if( triggerElem.hasClass('viewing-page-4') ){
						animateElementPrepare('viewing-page-4');
					}
					else if( triggerElem.hasClass('viewing-page-5') ){
						animateElementPrepare('viewing-page-5');
					}
					else if( triggerElem.hasClass('viewing-page-6') ){
						animateElementPrepare('viewing-page-6');
					}
				},
				afterMove: function(index){

					if( triggerElem.hasClass('viewing-page-2') ){
						animateElement('viewing-page-2');
					}
					else if( triggerElem.hasClass('viewing-page-1') ){
						animateElement('viewing-page-1');
					}
					else if( triggerElem.hasClass('viewing-page-3') ){
						animateElement('viewing-page-3');
					}
					else if( triggerElem.hasClass('viewing-page-4') ){
						animateElement('viewing-page-4');
					}
					else if( triggerElem.hasClass('viewing-page-5') ){
						animateElement('viewing-page-5');
					}
					else if( triggerElem.hasClass('viewing-page-6') ){
						animateElement('viewing-page-6');
					}

				}
			});
		}
	},

	pushNav = function(){
		$('body').addClass('push');
		$(settings.pushNavTrigger).click(function(event) {
			$('body').toggleClass('pushed');
			$(settings.pushNavElem).toggleClass('push-reset');
		});

		if( $('html').hasClass('mobile-view') ){
			$(settings.pushNavElem).find('a').click(function(event) {

				$('body').toggleClass('pushed');
				$(settings.pushNavElem).toggleClass('push-reset');

				$('body').scrollTo('#'+$(this).data('id'), {duration:'slow', offsetTop : '30'});
			});
		}
		else {
			$(settings.pushNavElem).find('a').click(function(event) {
				$(".main").moveTo($(this).data('menu-index'));
			});
		}
	},

	porfolio = function(){

		$(settings.portfolioElem).find('.works ul').isotope();

		$(settings.portfolioElem).find('.item').mouseenter(function(event) {
			$('.description', this).stop().fadeIn();
		}).mouseleave(function(event) {
			$('.description', this).stop().fadeOut();
		});;

		$(settings.portfolioElem).find('.controls a').click(function(){
			
			$(settings.portfolioElem).find('.controls li').removeClass('selected');
			$(this).parent('li').addClass('selected');

			var selector = $(this).attr('data-rel');
			if(selector!='*') selector = '.'+selector;

			$(settings.portfolioElem).find('.works ul').isotope({ 
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easeInOutExpo',
					queue: false
				}
			});
			return false;
		});

	};

	return { init: init }
}();

$(document).ready(function(){

	// LOADING AND INITIALIZING VcARD FUNCTION
	$(window).load(function() {
		$('.loading').remove();
		$('.main').css({ 'opacity' : 0, 'visibility' : 'visible' });
		$('.main').animate({ opacity : 1 });
		vCard.init();
	});

	// FOR DEVELOPER DEBUG MODE
	var reloadPage = function () {
	    location.reload();
	},
	resizeTimer;
	$(window).resize(function() {
	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(reloadPage, 100);
	});

});

