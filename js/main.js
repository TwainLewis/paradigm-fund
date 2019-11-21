/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header');
var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#content');
var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

var resizeContent = function resizeContent() {
  $content.css('height', function () {
    return $window.height() - $header.height();
  });
};

resizeContent();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
  return resizeContent();
});

/***/ }),

/***/ "./src/blocks/modules/sidebar/sidebar.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sidebar/sidebar.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('#btn-menu-close').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebar').css({
    display: 'none'
  });
});

/***/ }),

/***/ "./src/blocks/modules/team/team.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/team/team.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs-navigation-list__item').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('tabs-navigation-list__item-active').siblings().removeClass('tabs-navigation-list__item-active').closest('div.tabs').find('div.tabs-content').removeClass('tabs-content-active').eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).addClass('tabs-content-active');
});

/***/ }),

/***/ "./src/js/import/full-page-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/import/full-page-scroll.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Full page
 */

(function () {
  'use strict';
  /**
   * Full scroll main function
   */

  var fullScroll = function fullScroll(params) {
    /**
     * Main div
     * @type {Object}
     */
    var main = document.getElementById(params.mainElement);
    /**
     * Sections divclass
     * @type {Array}
     */

    var sections = main.getElementsByTagName('section');
    /**
     * Full page scroll configurations
     * @type {Object}
     */

    var defaults = {
      container: main,
      sections: sections,
      animateTime: params.animateTime || 0.7,
      animateFunction: params.animateFunction || 'ease',
      maxPosition: sections.length - 1,
      currentPosition: 0,
      displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
      dotsPosition: params.dotsPosition || 'left'
    };
    this.defaults = defaults;
    /**
     * Init build
     */

    this.init();
  };
  /**
   * Init plugin
   */


  fullScroll.prototype.init = function () {
    this.buildPublicFunctions().buildSections().buildDots().addEvents();
    var anchor = location.hash.replace('#', '').split('/')[0];
    location.hash = 0;
    console.log(anchor);
    this.changeCurrentPosition(anchor);
    this.registerIeTags();
  };
  /**
   * Build sections
   * @return {Object} this(fullScroll)
   */


  fullScroll.prototype.buildSections = function () {
    var sections = this.defaults.sections;

    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-index', i);
    }

    return this;
  };
  /**
   * Build dots navigation
   * @return {Object} this (fullScroll)
   */


  fullScroll.prototype.buildDots = function () {
    this.ul = document.createElement('ul');
    this.ul.className = this.updateClass(1, 'dots', this.ul.className);
    this.ul.className = this.updateClass(1, this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left', this.ul.className);

    var _self = this;

    var sections = this.defaults.sections;

    for (var i = 0; i < sections.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', '#' + i);
      li.appendChild(a);

      _self.ul.appendChild(li);
    }

    this.ul.childNodes[0].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[0].firstChild.className);

    if (this.defaults.displayDots) {
      document.body.appendChild(this.ul);
    }

    return this;
  };
  /**
   * Add Events
   * @return {Object} this(fullScroll)
   */


  fullScroll.prototype.addEvents = function () {
    if (document.addEventListener) {
      document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
      document.addEventListener('wheel', this.mouseWheelAndKey, false);
      document.addEventListener('keyup', this.mouseWheelAndKey, false);
      document.addEventListener('touchstart', this.touchStart, false);
      document.addEventListener('touchend', this.touchEnd, false);
      window.addEventListener("hashchange", this.hashChange, false);
      /**
       * Enable scroll if decive don't have touch support
       */

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (!('ontouchstart' in window)) {
          document.body.style = "overflow: scroll;";
          document.documentElement.style = "overflow: scroll;";
        }
      }
    } else {
      document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
      document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
    }

    return this;
  };
  /**
   * Build public functions
   * @return {[type]} [description]
   */


  fullScroll.prototype.buildPublicFunctions = function () {
    var mTouchStart = 0;
    var mTouchEnd = 0;

    var _self = this;

    this.mouseWheelAndKey = function (event) {
      if (event.deltaY > 0 || event.keyCode === 40) {
        _self.defaults.currentPosition++;

        _self.changeCurrentPosition(_self.defaults.currentPosition);
      } else if (event.deltaY < 0 || event.keyCode === 38) {
        _self.defaults.currentPosition--;

        _self.changeCurrentPosition(_self.defaults.currentPosition);
      }

      _self.removeEvents();
    };

    this.touchStart = function (event) {
      mTouchStart = parseInt(event.changedTouches[0].clientY);
      mTouchEnd = 0;
    };

    this.touchEnd = function (event) {
      mTouchEnd = parseInt(event.changedTouches[0].clientY);

      if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
        if (mTouchEnd > mTouchStart) {
          _self.defaults.currentPosition--;
        } else {
          _self.defaults.currentPosition++;
        }

        _self.changeCurrentPosition(_self.defaults.currentPosition);
      }
    };

    this.hashChange = function (event) {
      if (location) {
        var anchor = location.hash.replace('#', '').split('/')[0];

        if (anchor !== "") {
          if (anchor < 0) {
            _self.changeCurrentPosition(0);
          } else if (anchor > _self.defaults.maxPosition) {
            _self.changeCurrentPosition(_self.defaults.maxPosition);
          } else {
            _self.defaults.currentPosition = anchor;

            _self.showAnimateScroll();
          }
        }
      }
    };

    this.removeEvents = function () {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
        document.removeEventListener('wheel', this.mouseWheelAndKey, false);
        document.removeEventListener('keyup', this.mouseWheelAndKey, false);
        document.removeEventListener('touchstart', this.touchStart, false);
        document.removeEventListener('touchend', this.touchEnd, false);
      } else {
        document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
        document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
      }

      setTimeout(function () {
        _self.addEvents();
      }, 600);
    };

    this.showAnimateScroll = function () {
      var sectionNumber = window.location.href.toString().slice(-1);
      var sectionLength = this.defaults.sections.length;
      var logo = document.querySelector('.logo');

      var headerLogoShow = function headerLogoShow() {
        var sectionNumber = window.location.href.toString().slice(-1);

        if (sectionNumber === '0') {
          logo.classList.add('logo-none');
        } else {
          logo.classList.remove('logo-none');
        }
      };

      var dropNavShow = function dropNavShow() {
        var sectionNumber = window.location.href.toString().slice(-1);

        if (sectionNumber === '1' || sectionNumber === '2' || sectionNumber === '3' || sectionNumber === '4') {
          document.querySelector('.sidebar-navigation-drop').classList.add('sidebar-navigation-drop__active');
        } else {
          document.querySelector('.sidebar-navigation-drop').classList.remove('sidebar-navigation-drop__active');
        }

        if (sectionNumber === '1') {
          document.querySelector('.nav-num-first').classList.add('first-active');
        } else {
          document.querySelector('.nav-num-first').classList.remove('first-active');
        }
      };

      headerLogoShow();
      dropNavShow();

      function sectionFor(value) {
        for (var i = 0; i < sectionLength; i++) {
          value.sections[i].style.display = 'none';
          var elem = document.querySelectorAll(".sidebar-navigation__item");
          [].forEach.call(elem, function (el) {
            el.classList.remove("sidebar-navigation__item-active");

            if (sectionNumber === '2' || sectionNumber === '3' || sectionNumber === '4') {
              document.querySelector('.nav-num-1').classList.add('sidebar-navigation__item-active');
            }
          });
          document.querySelector('.nav-num-' + sectionNumber).classList.add('sidebar-navigation__item-active');
        }

        value.sections[sectionNumber].style.display = 'block';
      }

      if (sectionNumber === '0') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '1') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '2') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '3') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '4') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '5') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '6') {
        sectionFor(this.defaults);
      } else if (sectionNumber === '7') {
        sectionFor(this.defaults);
      }
    };

    this.animateScroll = function () {
      var animateTime = this.defaults.animateTime;
      var animateFunction = this.defaults.animateFunction;
      var position = this.defaults.currentPosition * 100;
      this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
      this.defaults.container.style.transform = 'translateY(-' + position + '%)';
      this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
      this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

      for (var i = 0; i < this.ul.childNodes.length; i++) {
        this.ul.childNodes[i].firstChild.className = this.updateClass(2, 'active', this.ul.childNodes[i].firstChild.className);

        if (i == this.defaults.currentPosition) {
          this.ul.childNodes[i].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[i].firstChild.className);
        }
      }
    };

    this.changeCurrentPosition = function (position) {
      if (position !== "") {
        _self.defaults.currentPosition = position;
        location.hash = _self.defaults.currentPosition;
      }
    };

    this.registerIeTags = function () {
      document.createElement('section');
    };

    this.updateClass = function (type, newClass, currentClass) {
      if (type === 1) {
        return currentClass += ' ' + newClass;
      } else if (type === 2) {
        return currentClass.replace(newClass, '');
      }
    };

    return this;
  };

  window.fullScroll = fullScroll;
})(); // scroll

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_team_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/team/team */ "./src/blocks/modules/team/team.js");
/* harmony import */ var _full_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-page-scroll */ "./src/js/import/full-page-scroll.js");





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map