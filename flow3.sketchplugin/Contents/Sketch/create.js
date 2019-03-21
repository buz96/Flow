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

  var symbolsPage = null;
  var pages = document.pages;

  for (var q = pages.length - 1; q >= 0; q--) {
    var pageName = document.pages[q].name;
    console.log(pageName);

    if (pageName == 'Symbols') {
      symbolsPage = document.pages[q];
      break;
    }
  } //find or create style for Hotspot representation

  /*
  var layersStyles = document.getSharedLayerStyles()
  var sK = layersStyles.length - 1
  
  for (var lsnum = layersStyles.length - 1; lsnum >= 0; lsnum--) {
    let currentStyleName = layersStyles[lsnum].name
    
      if(currentStyleName == 'Flow styles/Hotspot'){
        console.log('🤔 Flow styles/Hotspot - is alredy exist' )
        const hotspotStyleId = layersStyles[lsnum].id
        //console.log(layersStyles[lsnum])
      break
      }
  } 
  
  //if (lsnum == 0) {
    const hotspotStyle = sketch.SharedStyle.fromStyle({
          name: 'Flow styles/Hotspot',
      style: {
            fills: [],
            borders: [{ color: '#F78B00' }],
            }, 
      document: document
    });
    hotspotStyle.StyleType = Layer
    
  //}
  const hotspotStyleId = hotspotStyle.id
  
  */
  // Hotspot style is done


  function getSymbol(symbolID) {
    for (var e = symbolsPage.layers.length - 1; q >= 0; q--) {
      // use getSymbolMasterWithID instead
      if (symbolsPage.layers[q].symbolId == symbolID) {
        console.log('🔥🔥🔥 Symbol is finded');
        searchFlow(symbolsPage.layers[q]);
        break;
      }
    }
  }

  function searchFlow(currentArtboard) {
    try {
      var lrs = currentArtboard.layers;
      var lng = lrs.length;
      console.log(lng);

      for (var b = lng - 1; b >= 0; b--) {
        var selectedChild = lrs[b];
        var flw = selectedChild.flow;

        if (flw == undefined) {
          console.log('flow not found');

          if (selectedChild.type == 'SymbolInstance') {
            console.log('That is symbol');
            var symbolID = selectedChild.symbolId;
            getSymbol(symbolID); //get staff from symbol
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
          console.log('😺 flow "' + selectedChild.name + '" is Detected');
          var X = selectedChild.frame.x / Z;
          var Y = selectedChild.frame.y / Z;
          var W = selectedChild.frame.width / Z;
          var H = selectedChild.frame.height / Z;
          var hotspot = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Shape({
            frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX + X, artboardY + Y, W, H),
            parent: artboard,
            name: selectedChild.name,
            //sharedStyleId: hotspotStyleId,
            style: {
              fills: [],
              borders: [{
                color: '#F78B00'
              }]
            }
          }); //hotspot.style.syncWithSharedStyle(hotspotStyleId)

          var trgtID = flw.targetId;
          var targetArtboard = page.layers;

          for (var c = targetArtboard.length - 1; c >= 0; c--) {
            if (targetArtboard[c].id == trgtID) {
              console.log('target is ' + targetArtboard[c].name);
              new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text({
                parent: artboard,
                alignment: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Text.Alignment.center,
                text: 'to ' + targetArtboard[c].name,
                fixedWidth: true,
                frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX + X, artboardY + Y, W, H)
              });
              var trgtX = targetArtboard[c].frame.x;
              var trgtY = targetArtboard[c].frame.y;
              var wayPath = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath({
                name: 'Flow way',
                shapeType: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.ShapeType.Custom,
                parent: artboard,
                frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(artboardX, artboardY, trgtX / Z, trgtY / Z),
                points: [{
                  //curveFrom: NSMakePoint(0.1,0.1),
                  point: NSMakePoint(0.1, 0.1),
                  pointTipe: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Straight
                }, {
                  //curveFrom: NSMakePoint(0.5,0.1),
                  point: NSMakePoint(0.5, 0.1),
                  pointTipe: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Straight
                }],
                closed: false,
                style: {
                  fills: [],
                  borders: [{
                    color: '#F78B00'
                  }]
                }
              });
              var path = NSBezierPath.bezierPath();
              path.moveToPoint(NSMakePoint(artboardX + X, artboardY + Y));
              path.lineToPoint(NSMakePoint(trgtX / Z, trgtY / Z));
              wayPath = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.path;
              /*
              var path = NSBezierPath.bezierPath();
               path.moveToPoint(NSMakePoint(artboardX+X, artboardY+Y))
              path.lineToPoint(NSMakePoint( trgtX/Z, trgtY/Z ))
               var shape = MSShapeGroup.layerWithPath(MSPath.pathWithBezierPath(path));
              var border = shape.style().addStylePartOfType(1);
              border.color = MSColor.colorWithRGBADictionary({r: 0.8, g: 0.1, b: 0.1, a: 1});
               //shape.parent = artboard;
              
              context.document.currentPage().addLayers([shape]);
              shape.parent = artboard;
              console.log(shape)
              */
            }
          }
        }
      }
    } catch (err) {
      console.log('😿 an error' + err);
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
      )		*/

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
    } //artboard.adjustToFit()


    document.centerOnLayer(artboard);
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('🎉 Creating of flow chart is done!');
    var sound = NSSound.soundNamed('Tink'); //sound.play()
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