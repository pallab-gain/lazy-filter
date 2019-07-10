(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LazyFilter", [], factory);
	else if(typeof exports === 'object')
		exports["LazyFilter"] = factory();
	else
		root["LazyFilter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Filter out a key from a given object
 * @private
 * @param {String|number} key The key that we want to remove from the object
 * @param {Object|undefined} rest The object
 * @return {Object|undefined}
 */

const filter = (key, {
  [key]: _,
  ...rest
}) => {
  return rest;
};
/**
 * @public
 * Should filter out list of keys from the payload
 * @param {Object|undefined} payload JSON object that we want to filter out
 * @param {Array<Number|String>|Number|String} keys A list of keys that we want to filter out
 */


const omit = (payload = undefined, keys = []) => {
  if (!payload) {
    return payload;
  } // if there is no more keys


  if (!keys || Array.isArray(keys) && keys.length < 1) {
    return payload;
  } // if this is not an array then make it as a array


  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  const curKey = keys.shift();
  const rest = filter(curKey, payload);
  return omit(rest, keys);
};
/**
 * @public
 * Should only pick given list of keys from the object
 * @param {Object|undefined} payload JSON object that we want to filter out
 * @param {Array<Number|String>|Number|String} keys A list of keys that we want to filter out
 */


const pick = (payload = undefined, keys = []) => {
  if (!payload) {
    return payload;
  } // if there is no more keys


  if (!keys || Array.isArray(keys) && keys.length < 1) {
    return payload;
  } // if this is not an array then make it as a array


  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  const toOmit = Object.keys(payload).filter(item => !keys.includes(item));
  return omit(payload, toOmit);
};

module.exports = {
  pick,
  omit
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/filter.js */"./src/filter.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYXp5RmlsdGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9MYXp5RmlsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xhenlGaWx0ZXIvLi9zcmMvZmlsdGVyLmpzIl0sIm5hbWVzIjpbImZpbHRlciIsImtleSIsIl8iLCJyZXN0Iiwib21pdCIsInBheWxvYWQiLCJ1bmRlZmluZWQiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY3VyS2V5Iiwic2hpZnQiLCJwaWNrIiwidG9PbWl0IiwiT2JqZWN0IiwiaXRlbSIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFFYjs7Ozs7Ozs7QUFPQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNO0FBQUUsR0FBQ0EsR0FBRCxHQUFPQyxDQUFUO0FBQVksS0FBR0M7QUFBZixDQUFOLEtBQWdDO0FBQzdDLFNBQU9BLElBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7O0FBTUEsTUFBTUMsSUFBSSxHQUFHLENBQUNDLE9BQU8sR0FBR0MsU0FBWCxFQUFzQkMsSUFBSSxHQUFHLEVBQTdCLEtBQW9DO0FBQy9DLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osV0FBT0EsT0FBUDtBQUNELEdBSDhDLENBSS9DOzs7QUFDQSxNQUFJLENBQUNFLElBQUQsSUFBVUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLElBQWQsS0FBdUJBLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQW5ELEVBQXVEO0FBQ3JELFdBQU9MLE9BQVA7QUFDRCxHQVA4QyxDQVEvQzs7O0FBQ0EsTUFBSSxDQUFDRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBZCxDQUFMLEVBQTBCO0FBQ3hCQSxRQUFJLEdBQUcsQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBQ0QsUUFBTUksTUFBTSxHQUFHSixJQUFJLENBQUNLLEtBQUwsRUFBZjtBQUNBLFFBQU1ULElBQUksR0FBR0gsTUFBTSxDQUFDVyxNQUFELEVBQVNOLE9BQVQsQ0FBbkI7QUFDQSxTQUFPRCxJQUFJLENBQUNELElBQUQsRUFBT0ksSUFBUCxDQUFYO0FBQ0QsQ0FmRDtBQWlCQTs7Ozs7Ozs7QUFNQSxNQUFNTSxJQUFJLEdBQUcsQ0FBQ1IsT0FBTyxHQUFHQyxTQUFYLEVBQXNCQyxJQUFJLEdBQUcsRUFBN0IsS0FBb0M7QUFDL0MsTUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWixXQUFPQSxPQUFQO0FBQ0QsR0FIOEMsQ0FJL0M7OztBQUNBLE1BQUksQ0FBQ0UsSUFBRCxJQUFVQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBZCxLQUF1QkEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBbkQsRUFBdUQ7QUFDckQsV0FBT0wsT0FBUDtBQUNELEdBUDhDLENBUS9DOzs7QUFDQSxNQUFJLENBQUNHLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUwsRUFBMEI7QUFDeEJBLFFBQUksR0FBRyxDQUFDQSxJQUFELENBQVA7QUFDRDs7QUFDRCxRQUFNTyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZRixPQUFaLEVBQXFCTCxNQUFyQixDQUE0QmdCLElBQUksSUFBSSxDQUFDVCxJQUFJLENBQUNVLFFBQUwsQ0FBY0QsSUFBZCxDQUFyQyxDQUFmO0FBQ0EsU0FBT1osSUFBSSxDQUFDQyxPQUFELEVBQVVTLE1BQVYsQ0FBWDtBQUNELENBZEQ7O0FBZ0JBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZk4sTUFEZTtBQUVmVDtBQUZlLENBQWpCLEMiLCJmaWxlIjoibGF6eWZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTGF6eUZpbHRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMYXp5RmlsdGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxhenlGaWx0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEZpbHRlciBvdXQgYSBrZXkgZnJvbSBhIGdpdmVuIG9iamVjdFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfG51bWJlcn0ga2V5IFRoZSBrZXkgdGhhdCB3ZSB3YW50IHRvIHJlbW92ZSBmcm9tIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fHVuZGVmaW5lZH0gcmVzdCBUaGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5jb25zdCBmaWx0ZXIgPSAoa2V5LCB7IFtrZXldOiBfLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIHJlc3Q7XG59O1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqIFNob3VsZCBmaWx0ZXIgb3V0IGxpc3Qgb2Yga2V5cyBmcm9tIHRoZSBwYXlsb2FkXG4gKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IHBheWxvYWQgSlNPTiBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIGZpbHRlciBvdXRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyfFN0cmluZz58TnVtYmVyfFN0cmluZ30ga2V5cyBBIGxpc3Qgb2Yga2V5cyB0aGF0IHdlIHdhbnQgdG8gZmlsdGVyIG91dFxuICovXG5jb25zdCBvbWl0ID0gKHBheWxvYWQgPSB1bmRlZmluZWQsIGtleXMgPSBbXSkgPT4ge1xuICBpZiAoIXBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIGtleXNcbiAgaWYgKCFrZXlzIHx8IChBcnJheS5pc0FycmF5KGtleXMpICYmIGtleXMubGVuZ3RoIDwgMSkpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGlzIGlzIG5vdCBhbiBhcnJheSB0aGVuIG1ha2UgaXQgYXMgYSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG4gIGNvbnN0IGN1cktleSA9IGtleXMuc2hpZnQoKTtcbiAgY29uc3QgcmVzdCA9IGZpbHRlcihjdXJLZXksIHBheWxvYWQpO1xuICByZXR1cm4gb21pdChyZXN0LCBrZXlzKTtcbn07XG5cbi8qKlxuICogQHB1YmxpY1xuICogU2hvdWxkIG9ubHkgcGljayBnaXZlbiBsaXN0IG9mIGtleXMgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IHBheWxvYWQgSlNPTiBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIGZpbHRlciBvdXRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyfFN0cmluZz58TnVtYmVyfFN0cmluZ30ga2V5cyBBIGxpc3Qgb2Yga2V5cyB0aGF0IHdlIHdhbnQgdG8gZmlsdGVyIG91dFxuICovXG5jb25zdCBwaWNrID0gKHBheWxvYWQgPSB1bmRlZmluZWQsIGtleXMgPSBbXSkgPT4ge1xuICBpZiAoIXBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIGtleXNcbiAgaWYgKCFrZXlzIHx8IChBcnJheS5pc0FycmF5KGtleXMpICYmIGtleXMubGVuZ3RoIDwgMSkpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGlzIGlzIG5vdCBhbiBhcnJheSB0aGVuIG1ha2UgaXQgYXMgYSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG4gIGNvbnN0IHRvT21pdCA9IE9iamVjdC5rZXlzKHBheWxvYWQpLmZpbHRlcihpdGVtID0+ICFrZXlzLmluY2x1ZGVzKGl0ZW0pKTtcbiAgcmV0dXJuIG9taXQocGF5bG9hZCwgdG9PbWl0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwaWNrLFxuICBvbWl0XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==