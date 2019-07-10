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
 * @param {String|number} key The key that we want to remove from the object
 * @param {Object|undefined} rest The object
 * @return {*}
 */

const filter = (key, {
  [key]: _,
  ...rest
}) => {
  return rest;
};
/**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MYXp5RmlsdGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9MYXp5RmlsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xhenlGaWx0ZXIvLi9zcmMvZmlsdGVyLmpzIl0sIm5hbWVzIjpbImZpbHRlciIsImtleSIsIl8iLCJyZXN0Iiwib21pdCIsInBheWxvYWQiLCJ1bmRlZmluZWQiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY3VyS2V5Iiwic2hpZnQiLCJwaWNrIiwidG9PbWl0IiwiT2JqZWN0IiwiaXRlbSIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFFYjs7Ozs7OztBQU1BLE1BQU1BLE1BQU0sR0FBRyxDQUFDQyxHQUFELEVBQU07QUFBRSxHQUFDQSxHQUFELEdBQU9DLENBQVQ7QUFBWSxLQUFHQztBQUFmLENBQU4sS0FBZ0M7QUFDN0MsU0FBT0EsSUFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7OztBQUtBLE1BQU1DLElBQUksR0FBRyxDQUFDQyxPQUFPLEdBQUdDLFNBQVgsRUFBc0JDLElBQUksR0FBRyxFQUE3QixLQUFvQztBQUMvQyxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaLFdBQU9BLE9BQVA7QUFDRCxHQUg4QyxDQUkvQzs7O0FBQ0EsTUFBSSxDQUFDRSxJQUFELElBQVVDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLEtBQXVCQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFuRCxFQUF1RDtBQUNyRCxXQUFPTCxPQUFQO0FBQ0QsR0FQOEMsQ0FRL0M7OztBQUNBLE1BQUksQ0FBQ0csS0FBSyxDQUFDQyxPQUFOLENBQWNGLElBQWQsQ0FBTCxFQUEwQjtBQUN4QkEsUUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUNELFFBQU1JLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxLQUFMLEVBQWY7QUFDQSxRQUFNVCxJQUFJLEdBQUdILE1BQU0sQ0FBQ1csTUFBRCxFQUFTTixPQUFULENBQW5CO0FBQ0EsU0FBT0QsSUFBSSxDQUFDRCxJQUFELEVBQU9JLElBQVAsQ0FBWDtBQUNELENBZkQ7QUFpQkE7Ozs7Ozs7QUFLQSxNQUFNTSxJQUFJLEdBQUcsQ0FBQ1IsT0FBTyxHQUFHQyxTQUFYLEVBQXNCQyxJQUFJLEdBQUcsRUFBN0IsS0FBb0M7QUFDL0MsTUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWixXQUFPQSxPQUFQO0FBQ0QsR0FIOEMsQ0FJL0M7OztBQUNBLE1BQUksQ0FBQ0UsSUFBRCxJQUFVQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBZCxLQUF1QkEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBbkQsRUFBdUQ7QUFDckQsV0FBT0wsT0FBUDtBQUNELEdBUDhDLENBUS9DOzs7QUFDQSxNQUFJLENBQUNHLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUwsRUFBMEI7QUFDeEJBLFFBQUksR0FBRyxDQUFDQSxJQUFELENBQVA7QUFDRDs7QUFDRCxRQUFNTyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZRixPQUFaLEVBQXFCTCxNQUFyQixDQUE0QmdCLElBQUksSUFBSSxDQUFDVCxJQUFJLENBQUNVLFFBQUwsQ0FBY0QsSUFBZCxDQUFyQyxDQUFmO0FBQ0EsU0FBT1osSUFBSSxDQUFDQyxPQUFELEVBQVVTLE1BQVYsQ0FBWDtBQUNELENBZEQ7O0FBZ0JBSSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZk4sTUFEZTtBQUVmVDtBQUZlLENBQWpCLEMiLCJmaWxlIjoibGF6eS1maWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkxhenlGaWx0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGF6eUZpbHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMYXp5RmlsdGVyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBGaWx0ZXIgb3V0IGEga2V5IGZyb20gYSBnaXZlbiBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfG51bWJlcn0ga2V5IFRoZSBrZXkgdGhhdCB3ZSB3YW50IHRvIHJlbW92ZSBmcm9tIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fHVuZGVmaW5lZH0gcmVzdCBUaGUgb2JqZWN0XG4gKiBAcmV0dXJuIHsqfVxuICovXG5jb25zdCBmaWx0ZXIgPSAoa2V5LCB7IFtrZXldOiBfLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIHJlc3Q7XG59O1xuXG4vKipcbiAqIFNob3VsZCBmaWx0ZXIgb3V0IGxpc3Qgb2Yga2V5cyBmcm9tIHRoZSBwYXlsb2FkXG4gKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IHBheWxvYWQgSlNPTiBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIGZpbHRlciBvdXRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyfFN0cmluZz58TnVtYmVyfFN0cmluZ30ga2V5cyBBIGxpc3Qgb2Yga2V5cyB0aGF0IHdlIHdhbnQgdG8gZmlsdGVyIG91dFxuICovXG5jb25zdCBvbWl0ID0gKHBheWxvYWQgPSB1bmRlZmluZWQsIGtleXMgPSBbXSkgPT4ge1xuICBpZiAoIXBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIGtleXNcbiAgaWYgKCFrZXlzIHx8IChBcnJheS5pc0FycmF5KGtleXMpICYmIGtleXMubGVuZ3RoIDwgMSkpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGlzIGlzIG5vdCBhbiBhcnJheSB0aGVuIG1ha2UgaXQgYXMgYSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG4gIGNvbnN0IGN1cktleSA9IGtleXMuc2hpZnQoKTtcbiAgY29uc3QgcmVzdCA9IGZpbHRlcihjdXJLZXksIHBheWxvYWQpO1xuICByZXR1cm4gb21pdChyZXN0LCBrZXlzKTtcbn07XG5cbi8qKlxuICogU2hvdWxkIG9ubHkgcGljayBnaXZlbiBsaXN0IG9mIGtleXMgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IHBheWxvYWQgSlNPTiBvYmplY3QgdGhhdCB3ZSB3YW50IHRvIGZpbHRlciBvdXRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyfFN0cmluZz58TnVtYmVyfFN0cmluZ30ga2V5cyBBIGxpc3Qgb2Yga2V5cyB0aGF0IHdlIHdhbnQgdG8gZmlsdGVyIG91dFxuICovXG5jb25zdCBwaWNrID0gKHBheWxvYWQgPSB1bmRlZmluZWQsIGtleXMgPSBbXSkgPT4ge1xuICBpZiAoIXBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIGtleXNcbiAgaWYgKCFrZXlzIHx8IChBcnJheS5pc0FycmF5KGtleXMpICYmIGtleXMubGVuZ3RoIDwgMSkpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuICAvLyBpZiB0aGlzIGlzIG5vdCBhbiBhcnJheSB0aGVuIG1ha2UgaXQgYXMgYSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG4gIGNvbnN0IHRvT21pdCA9IE9iamVjdC5rZXlzKHBheWxvYWQpLmZpbHRlcihpdGVtID0+ICFrZXlzLmluY2x1ZGVzKGl0ZW0pKTtcbiAgcmV0dXJuIG9taXQocGF5bG9hZCwgdG9PbWl0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwaWNrLFxuICBvbWl0XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==