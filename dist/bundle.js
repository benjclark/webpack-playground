/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);


const initialHtmlDump = __webpack_require__(2);
const addRandomCharacter = __webpack_require__(3);
const removeCharacter = __webpack_require__(4);
const spinAndChangeDirection = __webpack_require__(5);

initialHtmlDump.init();
addRandomCharacter.init();
removeCharacter.init();
spinAndChangeDirection.init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function initialHtmlDump() {
    const container = document.querySelector('.container');
    const htmlString= '<p>b</p><p>t</p><p>K</p><p>I</p><p>Q</p><p>J</p><p>j</p><p>7</p><p>G</p><p>y</p><p>S</p><p>y</p><p>m</p><p>5</p><p>l</p><p>M</p><p>b</p><p>v</p><p>r</p><p>h</p><p>9</p><p>b</p><p>I</p><p>K</p><p>y</p><p>P</p><p>g</p><p>P</p><p>i</p><p>k</p><p>4</p><p>V</p><p>n</p><p>x</p><p>2</p><p>w</p><p>0</p><p>c</p><p>H</p><p>i</p><p>m</p><p>j</p><p>b</p><p>i</p><p>b</p><p>e</p><p>p</p><p>T</p><p>P</p><p>V</p><p>D</p><p>h</p><p>N</p><p>P</p><p>6</p><p>l</p><p>S</p><p>z</p><p>n</p><p>O</p><p>E</p><p>w</p><p>B</p><p>I</p><p>3</p><p>i</p><p>A</p><p>U</p><p>7</p><p>N</p><p>i</p><p>6</p><p>S</p><p>C</p><p>p</p><p>6</p><p>N</p><p>s</p><p>F</p><p>c</p><p>1</p><p>H</p><p>0</p><p>I</p><p>O</p><p>U</p><p>g</p><p>2</p><p>w</p><p>7</p><p>9</p><p>5</p><p>C</p><p>L</p><p>Y</p><p>N</p><p>2</p><p>C</p><p>u</p><p>k</p><p>O</p><p>T</p><p>D</p><p>T</p><p>K</p><p>n</p><p>l</p><p>r</p><p>A</p><p>4</p><p>l</p><p>S</p><p>E</p><p>X</p><p>e</p><p>S</p><p>j</p><p>Y</p><p>f</p><p>K</p><p>f</p><p>e</p><p>p</p><p>8</p><p>A</p><p>J</p><p>x</p><p>U</p><p>m</p><p>9</p><p>5</p><p>5</p><p>V</p><p>X</p><p>n</p><p>I</p><p>n</p><p>z</p><p>3</p><p>p</p><p>f</p><p>6</p><p>G</p><p>N</p><p>L</p><p>i</p><p>4</p><p>v</p><p>F</p><p>O</p><p>n</p><p>B</p><p>J</p><p>X</p><p>p</p><p>2</p><p>4</p><p>N</p><p>t</p><p>r</p><p>E</p><p>a</p><p>P</p><p>t</p><p>q</p><p>S</p><p>G</p><p>U</p><p>f</p><p>q</p><p>B</p><p>b</p><p>1</p><p>D</p><p>p</p><p>c</p><p>7</p><p>a</p><p>A</p><p>8</p><p>M</p><p>g</p><p>0</p><p>L</p><p>C</p><p>P</p><p>G</p><p>L</p><p>R</p><p>W</p><p>e</p><p>0</p><p>A</p><p>p</p><p>9</p><p>1</p><p>B</p><p>j</p><p>I</p><p>r</p><p>Z</p><p>c</p><p>V</p><p>r</p><p>C</p><p>y</p><p>H</p><p>e</p><p>F</p><p>p</p><p>B</p><p>G</p><p>I</p><p>3</p><p>X</p><p>u</p><p>h</p><p>S</p><p>A</p><p>G</p><p>t</p><p>6</p><p>a</p><p>7</p><p>t</p><p>i</p><p>N</p><p>W</p><p>P</p><p>A</p><p>T</p><p>v</p><p>k</p><p>e</p><p>k</p><p>2</p><p>F</p><p>Q</p><p>J</p><p>N</p><p>R</p><p>D</p><p>z</p><p>E</p><p>W</p><p>j</p><p>C</p><p>1</p><p>k</p><p>9</p><p>N</p><p>r</p><p>j</p><p>I</p><p>0</p><p>Q</p><p>3</p><p>m</p><p>v</p><p>c</p><p>A</p><p>9</p><p>J</p><p>f</p><p>W</p><p>R</p><p>f</p><p>q</p><p>r</p><p>q</p><p>k</p><p>0</p><p>J</p><p>w</p><p>y</p><p>N</p><p>q</p><p>n</p><p>C</p><p>x</p><p>z</p><p>G</p><p>m</p><p>N</p><p>G</p><p>E</p><p>v</p><p>i</p><p>f</p><p>a</p><p>f</p><p>d</p><p>M</p><p>p</p><p>j</p><p>o</p><p>g</p><p>X</p><p>r</p><p>U</p><p>f</p><p>d</p><p>9</p><p>6</p><p>B</p><p>B</p><p>9</p><p>Y</p><p>C</p><p>O</p><p>L</p><p>d</p><p>a</p><p>Q</p><p>e</p><p>M</p><p>N</p><p>7</p><p>v</p><p>r</p><p>j</p><p>u</p><p>5</p><p>r</p><p>r</p><p>D</p><p>c</p><p>h</p><p>q</p><p>L</p><p>E</p><p>B</p><p>o</p><p>s</p><p>e</p><p>1</p><p>d</p><p>N</p><p>G</p><p>v</p><p>v</p><p>m</p><p>m</p><p>H</p><p>W</p><p>5</p><p>K</p><p>9</p><p>U</p><p>Z</p><p>S</p><p>f</p><p>6</p><p>X</p><p>R</p><p>R</p><p>O</p><p>D</p><p>8</p><p>R</p><p>2</p><p>E</p><p>v</p><p>7</p><p>q</p><p>J</p><p>E</p><p>g</p><p>i</p><p>I</p><p>K</p><p>i</p><p>y</p><p>0</p><p>D</p><p>j</p><p>a</p><p>D</p><p>L</p><p>S</p><p>v</p><p>4</p><p>A</p><p>2</p><p>d</p><p>L</p><p>0</p><p>p</p><p>W</p><p>U</p><p>t</p><p>r</p><p>d</p><p>r</p><p>y</p><p>m</p><p>W</p><p>c</p><p>p</p><p>m</p><p>a</p><p>E</p><p>t</p><p>Y</p><p>0</p><p>R</p><p>x</p><p>7</p><p>W</p><p>F</p><p>N</p><p>Z</p><p>8</p><p>G</p><p>J</p><p>r</p><p>G</p><p>K</p><p>t</p><p>o</p><p>w</p><p>u</p><p>8</p><p>p</p><p>5</p><p>l</p><p>a</p><p>e</p><p>B</p><p>8</p><p>R</p><p>T</p><p>e</p><p>M</p><p>i</p><p>v</p><p>Z</p><p>X</p><p>9</p><p>z</p><p>i</p><p>C</p><p>A</p><p>6</p><p>L</p><p>q</p><p>v</p><p>2</p><p>Z</p><p>i</p><p>G</p><p>J</p><p>j</p><p>T</p><p>e</p><p>K</p><p>7</p><p>G</p><p>x</p><p>X</p><p>k</p><p>1</p><p>9</p><p>8</p><p>Y</p><p>T</p><p>E</p><p>4</p><p>b</p><p>r</p><p>c</p><p>z</p><p>3</p><p>v</p><p>j</p><p>X</p><p>p</p><p>1</p><p>s</p><p>O</p><p>3</p><p>z</p><p>H</p><p>y</p><p>6</p><p>y</p><p>S</p><p>B</p><p>C</p><p>I</p><p>O</p><p>v</p><p>B</p><p>f</p><p>Y</p><p>u</p><p>H</p><p>G</p><p>L</p><p>M</p><p>x</p><p>b</p><p>W</p><p>h</p><p>s</p><p>Q</p><p>u</p><p>v</p><p>h</p><p>D</p><p>R</p><p>1</p><p>m</p><p>y</p><p>K</p><p>V</p><p>P</p><p>z</p><p>K</p><p>V</p><p>i</p><p>N</p><p>U</p><p>z</p><p>h</p><p>V</p><p>f</p><p>l</p><p>P</p><p>I</p><p>o</p><p>Z</p><p>W</p><p>E</p><p>i</p><p>7</p><p>0</p><p>F</p><p>z</p><p>f</p><p>x</p><p>i</p><p>b</p><p>t</p><p>U</p><p>d</p><p>w</p><p>V</p><p>U</p><p>W</p><p>N</p><p>O</p><p>J</p><p>O</p><p>b</p><p>y</p><p>y</p><p>E</p><p>H</p><p>c</p><p>P</p><p>v</p><p>d</p><p>c</p><p>h</p><p>6</p><p>8</p><p>O</p><p>L</p><p>q</p><p>A</p><p>7</p><p>m</p><p>D</p><p>v</p><p>S</p><p>7</p><p>f</p><p>P</p><p>C</p><p>m</p><p>y</p><p>w</p><p>2</p><p>I</p><p>p</p><p>s</p><p>o</p><p>2</p><p>S</p><p>l</p><p>S</p><p>D</p><p>3</p><p>T</p><p>y</p><p>C</p><p>K</p><p>6</p><p>u</p><p>o</p><p>f</p><p>X</p><p>8</p><p>D</p><p>I</p><p>S</p><p>5</p><p>p</p><p>J</p><p>u</p><p>2</p><p>a</p><p>x</p><p>i</p><p>9</p><p>t</p><p>W</p><p>X</p><p>E</p><p>o</p><p>B</p><p>l</p><p>s</p><p>n</p><p>j</p><p>V</p><p>y</p><p>R</p><p>e</p>';
    container.innerHTML = htmlString;
}

module.exports = {init: initialHtmlDump};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function getRandomCharacter() {
    var character = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 1; i++)
      character += possible.charAt(Math.floor(Math.random() * possible.length));

    return character;
}

function addCharacterToPage() {
    setInterval(() => {
        const container = document.querySelector('.container');
        const text = document.createElement('p');
        text.innerHTML = getRandomCharacter();
        container.appendChild(text);
    }, 25);
}

module.exports = {init: addCharacterToPage};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function removeCharacterFromPage() {
    setInterval(()=> {
        const element = document.querySelector('.container p');
        element.parentNode.removeChild(element);
    }, 50);
}

module.exports = {init: removeCharacterFromPage};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function getFlexDirectionValue(iteration) {
    const flexDirections = ['column', 'column-reverse'];
    return flexDirections[iteration];
}

function changeDirectionAndSpin() {
    let i = 0;
    let deg = 0;
    setInterval(() => {
        const container = document.querySelector('.container');
        container.setAttribute('style', 'flex-direction:' + getFlexDirectionValue(i) + ";" + 'transform:' + "rotate(" + deg + "deg)");
        if(deg < 359) {deg += 1;} else {deg = 0;}
    }, 25);
    setInterval(() => {
        if(i === 0) {i = 1;} else if(i === 1) {i = 0;}
    }, 1500);
}

module.exports = {init: changeDirectionAndSpin};

/***/ })
/******/ ]);