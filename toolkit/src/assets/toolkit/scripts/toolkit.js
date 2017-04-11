/**
 * Toolkit JavaScript
 */

'use strict';

// Add ES2015 polyfills
require('babel-polyfill');

// For Node Modules
// Because no path was specified, Module will be included from "node_modules"
//var $ = require('jquery');
// require('../../vendor/imagesloaded/imagesloaded.pkgd.js');
require('../../vendor/isotope/dist/isotope.pkgd.js');

// Select2 script
require('../../vendor/select2/dist/js/select2.js');
require('../../vendor/dropzone/dropzone.js');

// For Bower Components
// Because Bower does not force a module structure, you have use a more specific path.

// Loading foundation from node
var foundation = require('../../vendor/foundation-sites/js/foundation.core.js');
var foundationTimeAndImage = require('../../vendor/foundation-sites/js/foundation.util.timerAndImageLoader.js');
var foundationMotion = require('../../vendor/foundation-sites/js/foundation.util.motion.js');
var foundationTriggers = require('../../vendor/foundation-sites/js/foundation.util.triggers.js');
var foundationKeyboard = require('../../vendor/foundation-sites/js/foundation.util.keyboard.js');
var foundationMediaQuery = require('../../vendor/foundation-sites/js/foundation.util.mediaQuery.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.box.js');
var foundationNest = require('../../vendor/foundation-sites/js/foundation.util.nest.js');
var foundationSticky = require('../../vendor/foundation-sites/js/foundation.sticky.js');
var foundationDropdown = require('../../vendor/foundation-sites/js/foundation.dropdown.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');
var foundationReveal = require('../../vendor/foundation-sites/js/foundation.reveal.js');
var foundationAbide = require('../../vendor/foundation-sites/js/foundation.abide.js');
var foundationTooltip = require('../../vendor/foundation-sites/js/foundation.tooltip.js');
var foundationDropdownMenu = require('../../vendor/foundation-sites/js/foundation.dropdownMenu.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');	
var foundationAccordionMenu = require('../../vendor/foundation-sites/js/foundation.accordionMenu.js');
var foundationToggler = require('../../vendor/foundation-sites/js/foundation.toggler.js');
var foundationTabs = require('../../vendor/foundation-sites/js/foundation.tabs.js');
var foundationMagellan = require('../../vendor/foundation-sites/js/foundation.magellan.js');
var foundationOffCanvas = require('../../vendor/foundation-sites/js/foundation.offcanvas.js');
var foundationOffOrbit = require('../../vendor/foundation-sites/js/foundation.orbit.js');
var foundationOffEqualizer = require('../../vendor/foundation-sites/js/foundation.equalizer.js');
var foundationDrilldowns = require('../../vendor/foundation-sites/js/foundation.drilldown.js');
var foundationToggle = require('../../vendor/foundation-sites/js/foundation.responsiveToggle.js');
var foundationResponsive = require('../../vendor/foundation-sites/js/foundation.responsiveMenu.js');

//require('smoothstate/jquery.smoothState.min.js');
// var smoothState = require('./jquery.smoothState.min.js');

// console.log($);
// $('h1').fadeOut(2000);

// Init select2 input.
$(".search-box").select2({
	placeholder: "What can you donate?"
});
$(".new-search-box").select2({
	placeholder: "Add tags"
});
var selectIcon = $('<span class="icon-search-icon select-icon"></span>');
$( ".selection" ).append( selectIcon );

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo();


// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation();

// jQuery of closing tab when touching ESC

	$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) {
        $( '.offcanvas-section' ).removeClass('open');
    }
	});

// jQuery opening the off-canvas of signin in and creating a new account

  $( ".login-pop" ).click(function() {
	  $('.offcanvas-section').addClass( "open" );
	  $('.open-sign-in').addClass( 'is-active');
		$('.open-account').removeClass( 'is-active' );
	});

	$('.sign-pop').click(function(){
		$('.offcanvas-section').addClass( 'open' );
		$('.open-sign-in').removeClass( 'is-active');
		$('.open-account').addClass( 'is-active' );
	});

	$( '.close-offcanvas').click(function(){
		$('.offcanvas-section').removeClass( "open" );
	});

// jQyery of Animated Hamburger

	$('.click').on('click', function() {
	  $(this).toggleClass('open');
	});

// jQuery of changing Desktop nav color when its his size while scrolling

  $(document).scroll(function () {
	  var $nav = $(".top-bar");
	  $nav.toggleClass('scrolled-desktop', $(this).scrollTop() > $nav.height());
	});

// jQuery of changing Mobile nav color when its his size while scrolling
	
  $(document).scroll(function () {
	  var $nav = $(".top-bar-responsive");
	  $nav.toggleClass('scrolled-mobile', $(this).scrollTop() > $nav.height());
	});

	$('html').on('click', function(e){
	    if (!$(e.target).is(".typed-input")) {
	      var $this = $(this);
	      $('.typed-search').show();
	  	  $('.typed-input').val('');
	    }
	});

// masonry and isotope

	var $grid = $('.isotope').isotope({
	  itemSelector: '.card',
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }
	});
  
  $('.filter-button-group li').on( 'click', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	// more filters click showing more..

	$('.filter-button').on('click', function(e) {
		e.preventDefault();
		$('.submenu-filters').toggleClass('filters-animation');
	});

	$('.tabs-title').on('click', function(){
		$('li').removeClass('active');	
		$(this).addClass('active');
	});

	if($('.select2-selection__choice').is(':visible')) {
		alert('hello moto');
	};
// Uploader of image
	$('.file-input').change(function(){
    var curElement = $(this).parent().parent().find('.image');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
	});
});

