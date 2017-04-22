
// var $ = require('jquery');

// // Init select2 input.
// $(".search-box").select2({
// 	placeholder: "What can you donate?"
// });
// var selectIcon = $('<span class="icon-search-icon select-icon"></span>');
// $( ".selection" ).append( selectIcon );

// function init() {


// // jQuery of closing tab when touching ESC

// 	$( document ).on( 'keydown', function ( e ) {
//     if ( e.keyCode === 27 ) {
//         $( '.offcanvas-section' ).removeClass('open');
//     }
// 	});

// // jQuery opening the off-canvas of signin in and creating a new account

//   $( ".login-pop" ).click(function() {
// 	  $('.offcanvas-section').addClass( "open" );
// 	  $('.open-sign-in').addClass( 'is-active');
// 		$('.open-account').removeClass( 'is-active' );
// 	});

// 	$('.sign-pop').click(function(){
// 		$('.offcanvas-section').addClass( 'open' );
// 		$('.open-sign-in').removeClass( 'is-active');
// 		$('.open-account').addClass( 'is-active' );
// 	});

// 	$( '.close-offcanvas').click(function(){
// 		$('.offcanvas-section').removeClass( "open" );
// 	});

// // jQyery of Animated Hamburger

// 	$('.click').on('click', function() {
// 	  $(this).toggleClass('open');
// 	});

// // jQuery of changing Desktop nav color when its his size while scrolling

//   $(document).scroll(function () {
// 	  var $nav = $(".top-bar");
// 	  $nav.toggleClass('scrolled-desktop', $(this).scrollTop() > $nav.height());
// 	});

// // jQuery of changing Mobile nav color when its his size while scrolling
	
//   $(document).scroll(function () {
// 	  var $nav = $(".top-bar-responsive");
// 	  $nav.toggleClass('scrolled-mobile', $(this).scrollTop() > $nav.height());
// 	});

// 	$('html').on('click', function(e){
// 	    if (!$(e.target).is(".typed-input")) {
// 	      var $this = $(this);
// 	      $('.typed-search').show();
// 	  	  $('.typed-input').val('');
// 	    }
// 	});

// // masonry and isotope

// 	var $grid = $('.isotope').isotope({
// 	  itemSelector: '.card',
// 	  masonry: {
// 	    columnWidth: '.grid-sizer'
// 	  }
// 	});
  
//   $('.filter-button-group li').on( 'click', function() {
// 	  var filterValue = $(this).attr('data-filter');
// 	  $grid.isotope({ filter: filterValue });
// 	});

// 	// more filters click showing more..

// 	$('.filter-button').on('click', function(e) {
// 		e.preventDefault();
// 		$('.submenu-filters').toggleClass('filters-animation');
// 	});

// 	$('.filter-button-discover').on('click', function(e) {
// 		e.preventDefault();
// 		$('.discover-fieldset-radio').toggleClass('discover-fieldset-radio-show');
// 	});

// 	$('.tabs-title').on('click', function(){
// 		$('li').removeClass('active');	
// 		$(this).addClass('active');
// 	});

// 	if($('.select2-selection__choice').is(':visible')) {
// 		alert('hello moto');
// 	};

// }

// $(init);
