var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Start creating flow chart ");
  var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.fromNative(context.document);
  var page = document.selectedPage;
  var selectedLayers = doc.selectedLayers;
  var selectedCount = selectedLayers.length;
  var Z = 4; ////////////////////////////

  function searchFlow(currentArtboard) {
    var lrs = currentArtboard.layers;
    var lng = lrs.length;
    console.log(lng);

    for (var b = lng - 1; b >= 0; b--) {
      var selectedChild = lrs[b];
      var flw = selectedChild.flow; //console.log(flw)

      if (flw == undefined) {
        console.log('flow not found'); //console.log(selectedChild)

        if (selectedChild.type == 'SymbolInstance') {
          console.log('That is symbol'); //get staff from symbol
        } else {
          if (selectedChild.type == 'Group') {
            if (selectedChild.layers > 0) {
              console.log('no childs');
            } else {
              console.log('go to clild' + selectedChild.name);
              searchFlow(selectedChild);
            }
          }
        }
      } else {
        console.log('flow is Detected');
        var X = selectedChild.frame.x / Z;
        var Y = selectedChild.frame.y / Z;
        var W = selectedChild.frame.width / Z;
        var H = selectedChild.frame.height / Z;
        new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Shape({
          frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX + X, artboardY + Y, W, H),
          parent: artboard,
          name: selectedChild.name,
          style: {
            fills: [],
            borders: [{
              color: '#F78B00'
            }]
          }
        });
        var trgtID = flw.targetId;
        console.log(trgtID);
        var pageArtboard = page.layers;

        for (var c = pageArtboard.length - 1; c >= 0; c--) {
          if (pageArtboard[c].id == trgtID) {
            console.log('target is ' + pageArtboard[c].name); //new sketch.

            new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text({
              parent: artboard,
              alignment: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.center,
              text: 'to ' + pageArtboard[c].name,
              fixedWidth: true,
              frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX + X, artboardY + Y, W, H)
            });
            new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath({
              name: 'Flow way',
              shapePath: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.ShapeType.Custom,
              parent: artboard,
              frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(30, 30, 50, 60),
              points: [{
                type: 'CurvePoint',
                cornerRadius: 0,
                curveFrom: [0.20, 0.20],
                curveTo: [0.20, 0.20],
                point: [(0.20, 0.20)],
                pointType: 'Straight'
              }, {
                type: 'CurvePoint',
                cornerRadius: 0,
                curveFrom: (0.20, 0.40),
                curveTo: (0.20, 0.40),
                point: (0.20, 0.40),
                pointType: 'Straight'
              }, {
                type: 'CurvePoint',
                cornerRadius: 0,
                curveFrom: (0.20, 0.20),
                curveTo: (0.20, 0.20),
                point: (0.20, 0.20),
                pointType: 'Straight'
              }],
              closed: false,
              style: {
                fills: [],
                borders: [{
                  color: '#F78B00'
                }]
              }
            });
            console.log('curve is created');
            /*
            points: 
            [ { type: 'CurvePoint',
              cornerRadius: 0,
              curveFrom: [Object],
              curveTo: [Object],
              point: [Object],
              pointType: 'Straight' },
             { type: 'CurvePoint',
              cornerRadius: 10,
              curveFrom: [Object],
              curveTo: [Object],
              point: [Object],
              pointType: 'Straight' },
             { type: 'CurvePoint',
              cornerRadius: 10,
              curveFrom: [Object],
              curveTo: [Object],
              point: [Object],
              pointType: 'Straight' },
             { type: 'CurvePoint',
              cornerRadius: 0,
              curveFrom: [Object],
              curveTo: [Object],
              point: [Object],
              pointType: 'Straight' } ],
            closed: false }
            */
          }
        }
      }
    }
  }

  if (selectedCount < 2) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('You need to select at least 2 layers ⚠️');
  } else {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("".concat(selectedCount, " layers selected"));
    var artboard = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Artboard({
      frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(-20, -700, 800, 600),
      parent: page,
      name: "Graph scheme"
    });

    for (var i = 0; i < selectedCount; i++) {
      sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("🚧 in progress" + (i + 1) + " from" + selectedCount + " layers");
      var currentArtboard = selectedLayers.layers[i];
      var currentName = currentArtboard.name;
      var artboardFrame = currentArtboard.frame;
      var artboardX = artboardFrame.x / Z;
      var artboardY = artboardFrame.y / Z;
      var artboardW = artboardFrame.width / Z;
      var artboardH = artboardFrame.height / Z;
      /* var currentSlice = new sketch.Slice(
      	{
      	parent: selectedLayers.layers[i],
      	frame: new sketch.Rectangle( X, Y, W, H),
      	scales: '1',
      	formats:'png',
      	}
      )
      
      var preview = new sketch.export(
      	currentArtboard,
      	{
      	scales: '1',
      	formats: 'png'
      	}
      )
      	console.log(preview)
      */

      var shape = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Shape({
        frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX, artboardY, artboardW, artboardH),
        parent: artboard,
        name: currentName,
        style: {
          fills: ['#fafafdff'],
          //change to image
          borders: []
        }
      });
      var layer = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text({
        parent: artboard,
        alignment: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.center,
        text: currentName,
        fixedWidth: true,
        frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX, artboardY - 20, artboardW)
      });
      searchFlow(currentArtboard);
    }

    artboard.adjustToFit();
    document.centerOnLayer(artboard);
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Creating of flow chart is done!");
  }
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=create.js.map