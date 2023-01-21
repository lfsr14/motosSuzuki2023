"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/components/Moto.js":
/*!********************************!*\
  !*** ./src/components/Moto.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "cont-moto",
  id: props.key
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  className: "link-moto",
  href: props.item.pdf,
  target: "_blank"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "moto",
  src: props.item.imagen
}))));

/***/ }),

/***/ "./src/components/catalogo.js":
/*!************************************!*\
  !*** ./src/components/catalogo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_listadoMotos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/listadoMotos */ "./src/data/listadoMotos.js");
/* harmony import */ var _Moto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Moto */ "./src/components/Moto.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "catalogo"
}, _data_listadoMotos__WEBPACK_IMPORTED_MODULE_1__["default"].map(moto => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Moto__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: moto,
    key: moto.id
  });
})));

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "footer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "SUZUKI MOTOR DE COLOMBIA S.A."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Todos los derechos reservados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Nit 891410137-2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "demo"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "textDemo"
}, "*** DEMO ***"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "AGENCIA NN\xAE - agenciann@gmail.com"))));

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imgs_Suzuki_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/Suzuki.png */ "./src/imgs/Suzuki.png");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
  className: "border-solid\tborder-b-2 border-neutral-900"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-suzuki",
  src: _imgs_Suzuki_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}))));

/***/ }),

/***/ "./src/data/listadoMotos.js":
/*!**********************************!*\
  !*** ./src/data/listadoMotos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  "id": "gixxer-150",
  "nombre": "Gixxer 150 FI ABS",
  "pdf": "../static/data/GIXXER-150-FI-ABS.pdf",
  "imagen": "../static/img/gixxer-fi-150-abs.png"
}, {
  "id": "gixxer-250-sf",
  "nombre": "Gixxer 250 SF",
  "pdf": "../static/data/GIXXER-250-SF.pdf",
  "imagen": "../static/img/gixxer-sf-250-suprema.png"
}, {
  "id": "gixxer-250",
  "nombre": "Gixxer 250",
  "pdf": "../static/data/GIXXER-250.pdf",
  "imagen": "../static/img/gixxer-250.png"
}, {
  "id": "gn-125",
  "nombre": "GN 125",
  "pdf": "../static/data/GN-125.pdf",
  "imagen": "../static/img/gN-125.png"
}, {
  "id": "gsx-r-150",
  "nombre": "GSX R 150 ABS",
  "pdf": "../static/data/GSX-R-150-2022-ABS.pdf",
  "imagen": "../static/img/gsx-r-150.png"
}, {
  "id": "gsx-s",
  "nombre": "GSX S 2022 ABS",
  "pdf": "../static/data/GSX-S-2022-ABS.pdf",
  "imagen": "../static/img/gsx-s-150.png"
}, {
  "id": "gsx-s-1000",
  "nombre": "GSX S 1000",
  "pdf": "../static/data/GSX-S1000.pdf",
  "imagen": "../static/img/gsx-s-1000.png"
}, {
  "id": "hayabusa",
  "nombre": "HAYABUSA",
  "pdf": "../static/data/HAYABUSA.pdf",
  "imagen": "../static/img/hayabusa.png"
}]);

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3746584292_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3746584292.json */ "./public/page-data/sq/d/3746584292.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_catalogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/catalogo */ "./src/components/catalogo.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");





function Home() {
  let usuario = "";
  let file = null;
  console.log(window.location);
  let params = window.location.search;
  params = params.replace("?", "");
  params = params.split("&");
  params.forEach(element => {
    let p = element.split("=");
    if (p[0] == "u") usuario = p[1];else if (p[0] == "f") file = p[1];
  });
  console.log(usuario);
  const dt = _public_page_data_sq_d_3746584292_json__WEBPACK_IMPORTED_MODULE_0__.data;
  console.log(dt);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_catalogo__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./src/imgs/Suzuki.png":
/*!*****************************!*\
  !*** ./src/imgs/Suzuki.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Suzuki-71e91e02833886e5fcf37aa991d8c182.png");

/***/ }),

/***/ "./public/page-data/sq/d/3746584292.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3746584292.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"usuariosJson":{"id":"fa13a654-3148-577f-9dc2-c7b41d2a1de7","registro":"AS1","documento":"74282579","nombre":"Bernardo Segura","telefono":"3112546509","wapp":"3112546509","instagram":"bernardosuzuki","direccion":"Cra 19 # 134 - 15 Bogotá D.C., Colombia.","vitrina":"Suzuki Concept Store Bogotá"}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map