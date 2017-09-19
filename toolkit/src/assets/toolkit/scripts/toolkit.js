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

$(function(){
  if($('section').is('.map-show')){ 
		require('./modules/map.js');
  }
  if($('section').is('.info-campaign')){
  	require('../../vendor/progress-circle-js/progress-circle-js.js');
  }
});

require('./modules/general.js');

// console.log($);
// $('h1').fadeOut(2000);

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo();
 
// document.documentElement.className = 'no-fouc';

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
	//console.log('Script kiddies of the world unite.')
	$(document).foundation();
});