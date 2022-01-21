/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.js":
/*!**************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.js ***!
  \**************************************************/
/***/ (function(module) {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst apikey = \"pk.eyJ1IjoicGVmZiIsImEiOiJja3d3bjQxbmgwNWR4MnZxMWJub25yZXc4In0.OHql2CO2vCja5LzugCaaCg\";\nconst baseUrl = \"https://api.entur.io/geocoder/v1/autocomplete?text=\";\nconst list = document.querySelector(\"ul\")\nconst input = document.querySelector(\"#text-input\");\nconst btn = document.querySelector(\"#btn\");\nconst date = new Date();\n\nconst populateMap = (coordinates) => {\n  (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().accessToken) = apikey;\n  const map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Map)({\n    container: 'map',\n    style: 'mapbox://styles/mapbox/streets-v9',\n    center: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],\n    zoom: 12\n  });\n  const marker = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Marker)()\n    .setLngLat([parseFloat(coordinates[0]), parseFloat(coordinates[1])])\n    .addTo(map);\n};\n\n\nconst getCoordinates = (data) => {\n  console.log(data);\n  const coordinates = data.features[0].geometry.coordinates;\n  populateMap(coordinates)\n  // list.insertAdjacentElement('beforeend', data.name);\n};\n\nconst apiCall = () => {\n  fetch(`${baseUrl}${input.value}&lang=en`)\n    .then(response => response.json())\n    .then(getCoordinates);\n};\n\nbtn.addEventListener((\"click\"), (event) => {\n  event.preventDefault();\n  apiCall();\n});\n\n\nconsole.log(\"Hello\");\n\n// input.addEventListener(\"keyup\", (event) => {\n//   listResults.innerHTML = \"\";\n//   console.log('yo');\n// });\n\n// atag.addEventListener((\"click\"), (event) => {\n//   event.preventDefault();\n//   navigator.geolocation.getCurrentPosition((data) => {\n//     console.log(data);\n//   });\n// });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBb0I7QUFDdEIsa0JBQWtCLHNEQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQix5REFBZTtBQUNwQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUSxFQUFFLFlBQVk7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25vYWlnbml0ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG5cbmNvbnN0IGFwaWtleSA9IFwicGsuZXlKMUlqb2ljR1ZtWmlJc0ltRWlPaUpqYTNkM2JqUXhibWd3TldSNE1uWnhNV0p1YjI1eVpYYzRJbjAuT0hxbDJDTzJ2Q2phNUx6dWdDYWFDZ1wiO1xuY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9hcGkuZW50dXIuaW8vZ2VvY29kZXIvdjEvYXV0b2NvbXBsZXRlP3RleHQ9XCI7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dC1pbnB1dFwiKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuXCIpO1xuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IHBvcHVsYXRlTWFwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gYXBpa2V5O1xuICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICBjb250YWluZXI6ICdtYXAnLFxuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICBjZW50ZXI6IFtwYXJzZUZsb2F0KGNvb3JkaW5hdGVzWzBdKSwgcGFyc2VGbG9hdChjb29yZGluYXRlc1sxXSldLFxuICAgIHpvb206IDEyXG4gIH0pO1xuICBjb25zdCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKClcbiAgICAuc2V0TG5nTGF0KFtwYXJzZUZsb2F0KGNvb3JkaW5hdGVzWzBdKSwgcGFyc2VGbG9hdChjb29yZGluYXRlc1sxXSldKVxuICAgIC5hZGRUbyhtYXApO1xufTtcblxuXG5jb25zdCBnZXRDb29yZGluYXRlcyA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBjb29yZGluYXRlcyA9IGRhdGEuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gIHBvcHVsYXRlTWFwKGNvb3JkaW5hdGVzKVxuICAvLyBsaXN0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZGF0YS5uYW1lKTtcbn07XG5cbmNvbnN0IGFwaUNhbGwgPSAoKSA9PiB7XG4gIGZldGNoKGAke2Jhc2VVcmx9JHtpbnB1dC52YWx1ZX0mbGFuZz1lbmApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGdldENvb3JkaW5hdGVzKTtcbn07XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgYXBpQ2FsbCgpO1xufSk7XG5cblxuY29uc29sZS5sb2coXCJIZWxsb1wiKTtcblxuLy8gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuLy8gICBsaXN0UmVzdWx0cy5pbm5lckhUTUwgPSBcIlwiO1xuLy8gICBjb25zb2xlLmxvZygneW8nKTtcbi8vIH0pO1xuXG4vLyBhdGFnLmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksIChldmVudCkgPT4ge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChkYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIH0pO1xuLy8gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;