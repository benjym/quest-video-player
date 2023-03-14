/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _resources_test_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/test.mp4 */ \"./resources/test.mp4\");\n/* harmony import */ var _manifest_webmanifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manifest.webmanifest */ \"./manifest.webmanifest\");\n/* harmony import */ var three_addons_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/addons/webxr/VRButton.js */ \"./node_modules/three/examples/jsm/webxr/VRButton.js\");\n/* provided dependency */ var THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconsole.debug(`Using Three.js revision ${THREE.REVISION}`);\n\n// import * as THREE from 'three';\n// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';\n// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';\n// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';\n// import ImmersiveControls from '@depasquale/three-immersive-controls';\n// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';\n// import { Lut } from 'three/examples/jsm/math/Lut.js';\n// import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';\n\n// import * as PHYSICS from './physics.js';\n// import * as CONTROLLERS from './controllers.js';\n\n\n// import beach from '../resources/beach-1.jpeg';\n\n// import * as VRGUI from './datguivr/datguivr.min.js';\n// import * as VRGUI from './guivr.js';\n\n// let group = new THREE.Group();\n// let beam;\n// let left_support, right_support;\n// let load_position_gui;\n// let font;\n// export let BMD, SFD, box;\n\nlet urlParams = new URLSearchParams(window.location.search);\n\n//<video id=\"video\" loop muted crossOrigin=\"anonymous\" playsinline style=\"display:none\">\n//    <!-- <source src=\"resources/MaryOculus.webm\"> -->\n//    <source src=\"resources/test.mp4\">\n//</video>\n\n// import * as THREE from 'three';\n\n\nlet camera, scene, renderer;\n\ninit();\nanimate();\n\nfunction init() {\n\n    const container = document.getElementById('container');\n    container.addEventListener('click', function () {\n\n        video.play();\n\n    });\n\n    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);\n    camera.layers.enable(1); // render left view when no stereo available\n\n    // video\n\n    // const video = document.getElementById('video');\n    let video = document.createElement('video');\n    if (urlParams.has('video')) { video.src = urlParams.get('video') }\n    else { video.src = 'test.mp4' }\n    video.loop = true;\n    video.crossOrigin = \"anonymous\";\n    video.style = \"display:none\";\n    window.setTimeout(() => { video.play() }, 1000);\n\n    const texture = new THREE.VideoTexture(video);\n\n    scene = new THREE.Scene();\n    scene.background = new THREE.Color(0x101010);\n\n    // left\n\n    const geometry1 = new THREE.SphereGeometry(500, 60, 40);\n    // invert the geometry on the x-axis so that all of the faces point inward\n    geometry1.scale(- 1, 1, 1);\n\n    // const uvs1 = geometry1.attributes.uv.array;\n\n    // for (let i = 0; i < uvs1.length; i += 2) {\n\n    //     // uvs1[i] *= 0.5; // NOTE: was in original code, seemed weird\n\n    // }\n\n    const material1 = new THREE.MeshBasicMaterial({ map: texture });\n\n    const mesh1 = new THREE.Mesh(geometry1, material1);\n    mesh1.rotation.y = - Math.PI / 2;\n    mesh1.layers.set(1); // display in left eye only\n    scene.add(mesh1);\n\n    // right\n\n    const geometry2 = new THREE.SphereGeometry(500, 60, 40);\n    geometry2.scale(- 1, 1, 1);\n\n    // const uvs2 = geometry2.attributes.uv.array;\n\n    // for (let i = 0; i < uvs2.length; i += 2) {\n\n    //     // uvs2[i] *= 0.5; // NOTE: was in original code, seemed weird\n    //     // uvs2[i] += 0.5; // NOTE: was in original code, seemed weird\n\n    // }\n\n    const material2 = new THREE.MeshBasicMaterial({ map: texture });\n\n    const mesh2 = new THREE.Mesh(geometry2, material2);\n    mesh2.rotation.y = - Math.PI / 2;\n    mesh2.layers.set(2); // display in right eye only\n    scene.add(mesh2);\n\n    //\n\n    renderer = new THREE.WebGLRenderer();\n    renderer.setPixelRatio(window.devicePixelRatio);\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.xr.enabled = true;\n    renderer.xr.setReferenceSpaceType('local');\n    container.appendChild(renderer.domElement);\n\n    document.body.appendChild(three_addons_webxr_VRButton_js__WEBPACK_IMPORTED_MODULE_3__.VRButton.createButton(renderer));\n\n    //\n\n    window.addEventListener('resize', onWindowResize);\n\n}\n\nfunction onWindowResize() {\n\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n\n    renderer.setSize(window.innerWidth, window.innerHeight);\n\n}\n\nfunction animate() {\n\n    renderer.setAnimationLoop(render);\n\n}\n\nfunction render() {\n\n    renderer.render(scene, camera);\n\n}\n\n//# sourceURL=webpack://360Video/./js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body { margin: 0; }\\n\\n.button {\\n    align-items: center;\\n    border: 1px solid transparent;\\n    border-radius: 4px;\\n    box-shadow: none;\\n    display: inline-flex;\\n    font-size: 1rem;\\n    height: 2.5em;\\n    justify-content: flex-start;\\n    line-height: 1.5;\\n    padding-bottom: calc(0.5em - 1px);\\n    padding-left: calc(0.75em - 1px);\\n    padding-right: calc(0.75em - 1px);\\n    padding-top: calc(0.5em - 1px);\\n    position: relative;\\n    vertical-align: top;\\n  }\\n   .button:focus, .button:active {\\n    outline: none;\\n  }\\n  \\n   .button {\\n    -webkit-touch-callout: none;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n  }\\n\\n\\n#buttonsContainer {\\n    position: absolute;\\n    bottom: 5px;\\n    right: 5px;\\n    z-index: 3;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://360Video/./css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://360Video/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://360Video/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./manifest.webmanifest":
/*!******************************!*\
  !*** ./manifest.webmanifest ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"manifest.webmanifest\");\n\n//# sourceURL=webpack://360Video/./manifest.webmanifest?");

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://360Video/./css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://360Video/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./resources/test.mp4":
/*!****************************!*\
  !*** ./resources/test.mp4 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40b22950bf6148e255d0.mp4\";\n\n//# sourceURL=webpack://360Video/./resources/test.mp4?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/webxr/VRButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/three/examples/jsm/webxr/VRButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VRButton\": () => (/* binding */ VRButton)\n/* harmony export */ });\nclass VRButton {\n\n\tstatic createButton( renderer ) {\n\n\t\tconst button = document.createElement( 'button' );\n\n\t\tfunction showEnterVR( /*device*/ ) {\n\n\t\t\tlet currentSession = null;\n\n\t\t\tasync function onSessionStarted( session ) {\n\n\t\t\t\tsession.addEventListener( 'end', onSessionEnded );\n\n\t\t\t\tawait renderer.xr.setSession( session );\n\t\t\t\tbutton.textContent = 'EXIT VR';\n\n\t\t\t\tcurrentSession = session;\n\n\t\t\t}\n\n\t\t\tfunction onSessionEnded( /*event*/ ) {\n\n\t\t\t\tcurrentSession.removeEventListener( 'end', onSessionEnded );\n\n\t\t\t\tbutton.textContent = 'ENTER VR';\n\n\t\t\t\tcurrentSession = null;\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\tbutton.style.display = '';\n\n\t\t\tbutton.style.cursor = 'pointer';\n\t\t\tbutton.style.left = 'calc(50% - 50px)';\n\t\t\tbutton.style.width = '100px';\n\n\t\t\tbutton.textContent = 'ENTER VR';\n\n\t\t\tbutton.onmouseenter = function () {\n\n\t\t\t\tbutton.style.opacity = '1.0';\n\n\t\t\t};\n\n\t\t\tbutton.onmouseleave = function () {\n\n\t\t\t\tbutton.style.opacity = '0.5';\n\n\t\t\t};\n\n\t\t\tbutton.onclick = function () {\n\n\t\t\t\tif ( currentSession === null ) {\n\n\t\t\t\t\t// WebXR's requestReferenceSpace only works if the corresponding feature\n\t\t\t\t\t// was requested at session creation time. For simplicity, just ask for\n\t\t\t\t\t// the interesting ones as optional features, but be aware that the\n\t\t\t\t\t// requestReferenceSpace call will fail if it turns out to be unavailable.\n\t\t\t\t\t// ('local' is always available for immersive sessions and doesn't need to\n\t\t\t\t\t// be requested separately.)\n\n\t\t\t\t\tconst sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ] };\n\t\t\t\t\tnavigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tcurrentSession.end();\n\n\t\t\t\t}\n\n\t\t\t};\n\n\t\t}\n\n\t\tfunction disableButton() {\n\n\t\t\tbutton.style.display = '';\n\n\t\t\tbutton.style.cursor = 'auto';\n\t\t\tbutton.style.left = 'calc(50% - 75px)';\n\t\t\tbutton.style.width = '150px';\n\n\t\t\tbutton.onmouseenter = null;\n\t\t\tbutton.onmouseleave = null;\n\n\t\t\tbutton.onclick = null;\n\n\t\t}\n\n\t\tfunction showWebXRNotFound() {\n\n\t\t\tdisableButton();\n\n\t\t\tbutton.textContent = 'VR NOT SUPPORTED';\n\n\t\t}\n\n\t\tfunction showVRNotAllowed( exception ) {\n\n\t\t\tdisableButton();\n\n\t\t\tconsole.warn( 'Exception when trying to call xr.isSessionSupported', exception );\n\n\t\t\tbutton.textContent = 'VR NOT ALLOWED';\n\n\t\t}\n\n\t\tfunction stylizeElement( element ) {\n\n\t\t\telement.style.position = 'absolute';\n\t\t\telement.style.bottom = '20px';\n\t\t\telement.style.padding = '12px 6px';\n\t\t\telement.style.border = '1px solid #fff';\n\t\t\telement.style.borderRadius = '4px';\n\t\t\telement.style.background = 'rgba(0,0,0,0.1)';\n\t\t\telement.style.color = '#fff';\n\t\t\telement.style.font = 'normal 13px sans-serif';\n\t\t\telement.style.textAlign = 'center';\n\t\t\telement.style.opacity = '0.5';\n\t\t\telement.style.outline = 'none';\n\t\t\telement.style.zIndex = '999';\n\n\t\t}\n\n\t\tif ( 'xr' in navigator ) {\n\n\t\t\tbutton.id = 'VRButton';\n\t\t\tbutton.style.display = 'none';\n\n\t\t\tstylizeElement( button );\n\n\t\t\tnavigator.xr.isSessionSupported( 'immersive-vr' ).then( function ( supported ) {\n\n\t\t\t\tsupported ? showEnterVR() : showWebXRNotFound();\n\n\t\t\t\tif ( supported && VRButton.xrSessionIsGranted ) {\n\n\t\t\t\t\tbutton.click();\n\n\t\t\t\t}\n\n\t\t\t} ).catch( showVRNotAllowed );\n\n\t\t\treturn button;\n\n\t\t} else {\n\n\t\t\tconst message = document.createElement( 'a' );\n\n\t\t\tif ( window.isSecureContext === false ) {\n\n\t\t\t\tmessage.href = document.location.href.replace( /^http:/, 'https:' );\n\t\t\t\tmessage.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message\n\n\t\t\t} else {\n\n\t\t\t\tmessage.href = 'https://immersiveweb.dev/';\n\t\t\t\tmessage.innerHTML = 'WEBXR NOT AVAILABLE';\n\n\t\t\t}\n\n\t\t\tmessage.style.left = 'calc(50% - 90px)';\n\t\t\tmessage.style.width = '180px';\n\t\t\tmessage.style.textDecoration = 'none';\n\n\t\t\tstylizeElement( message );\n\n\t\t\treturn message;\n\n\t\t}\n\n\t}\n\n\tstatic registerSessionGrantedListener() {\n\n\t\tif ( 'xr' in navigator ) {\n\n\t\t\t// WebXRViewer (based on Firefox) has a bug where addEventListener\n\t\t\t// throws a silent exception and aborts execution entirely.\n\t\t\tif ( /WebXRViewer\\//i.test( navigator.userAgent ) ) return;\n\n\t\t\tnavigator.xr.addEventListener( 'sessiongranted', () => {\n\n\t\t\t\tVRButton.xrSessionIsGranted = true;\n\n\t\t\t} );\n\n\t\t}\n\n\t}\n\n}\n\nVRButton.xrSessionIsGranted = false;\nVRButton.registerSessionGrantedListener();\n\n\n\n\n//# sourceURL=webpack://360Video/./node_modules/three/examples/jsm/webxr/VRButton.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;