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
  className: "cont-moto"
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
  className: "border-solid\tborder-b-2 border-neutral-900"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  className: "img-suzuki",
  src: _imgs_Suzuki_png__WEBPACK_IMPORTED_MODULE_1__["default"]
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.nombre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.documento), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.telefono), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.wapp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.instagram), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.direccion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.contacto.vitrina)));

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_catalogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/catalogo */ "./src/components/catalogo.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");





const WEATHER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query MyQuery($reg: String!){
    usuariosJson(registro: {eq: $reg}) {
      id
      registro
      documento
      nombre
      telefono
      wapp
      instagram
      direccion
      vitrina
    }
  }
`;
const Index = ({
  location
}) => {
  console.log(location);
  let reg = "";
  let file = null;
  let params = window.location.search;
  params = params.replace("?", "");
  params = params.split("&");
  params.forEach(element => {
    let p = element.split("=");
    if (p[0] == "u") reg = p[1];else if (p[0] == "f") file = p[1];
  });
  let contacto = {
    nombre: ''
  };
  let {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(WEATHER_QUERY, {
    variables: {
      reg
    },
    notifyOnNetworkStatusChange: true
  });
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Error...");
  if (data.usuariosJson) contacto = data.usuariosJson;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    contacto: contacto
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_catalogo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./node_modules/graphql-tag/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disableExperimentalFragmentVariables": () => (/* binding */ disableExperimentalFragmentVariables),
/* harmony export */   "disableFragmentWarnings": () => (/* binding */ disableFragmentWarnings),
/* harmony export */   "enableExperimentalFragmentVariables": () => (/* binding */ enableExperimentalFragmentVariables),
/* harmony export */   "gql": () => (/* binding */ gql),
/* harmony export */   "resetCaches": () => (/* binding */ resetCaches)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/parser.mjs");


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                        + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                        + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            }
            else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        }
        else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, ast), { definitions: definitions });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function (node) {
        if (node.loc)
            delete node.loc;
        Object.keys(node).forEach(function (key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.parse)(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [literals];
    }
    var result = literals[0];
    args.forEach(function (arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        }
        else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function (gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gql);
//# sourceMappingURL=index.js.map

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

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useApolloClient.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useApolloClient": () => (/* binding */ useApolloClient)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



function useApolloClient(override) {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)());
    var client = override || context.client;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!client, 31);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useQuery.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInternalState": () => (/* binding */ useInternalState),
/* harmony export */   "useQuery": () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useSyncExternalStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useSyncExternalStore.js */ "./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/utilities/common/mergeOptions.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");












var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState((0,_useApolloClient_js__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query, stateRef.current);
    }
    var state = stateRef.current;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), _tick = _a[0], setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query, previous) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.maybeDeepFreeze)({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.loading,
        });
        this.skipStandbyResult = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.maybeDeepFreeze)({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.ready,
        });
        this.toQueryResultCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap ? WeakMap : Map)();
        (0,_parser_index_js__WEBPACK_IMPORTED_MODULE_7__.verifyDocumentType)(query, _parser_index_js__WEBPACK_IMPORTED_MODULE_7__.DocumentType.Query);
        var previousResult = previous && previous.result;
        var previousData = previousResult && previousResult.data;
        if (previousData) {
            this.previousData = previousData;
        }
    }
    InternalState.prototype.forceUpdate = function () {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState.prototype.asyncUpdate = function (signal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var watchQueryOptions = _this.watchQueryOptions;
            var handleAborted = function () {
                _this.asyncResolveFns.delete(resolve);
                _this.optionsToIgnoreOnce.delete(watchQueryOptions);
                signal.removeEventListener('abort', handleAborted);
                reject(signal.reason);
            };
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(watchQueryOptions);
            signal.addEventListener('abort', handleAborted);
            _this.forceUpdate();
        });
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_8__.getApolloContext)()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = (0,_useSyncExternalStore_js__WEBPACK_IMPORTED_MODULE_9__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    (0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); }, function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        var queryResult = this.toQueryResult(result);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function (resolve) { return resolve(queryResult); });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(this.getObsQueryOptions());
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false &&
            !this.queryHookOptions.skip) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.getObsQueryOptions = function () {
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (this.queryHookOptions.defaultOptions) {
            toMerge.push(this.queryHookOptions.defaultOptions);
        }
        toMerge.push((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.compact)(this.observable && this.observable.options, this.watchQueryOptions));
        return toMerge.reduce(_core_index_js__WEBPACK_IMPORTED_MODULE_11__.mergeOptions);
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, otherOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__rest)(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy();
        }
        return watchQueryOptions;
    };
    InternalState.prototype.getDefaultFetchPolicy = function () {
        var _a, _b;
        return (((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            "cache-first");
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(this.getObsQueryOptions());
        this.obsQueryFields = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false ||
            this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        var _this = this;
        if (!result.loading) {
            var error_1 = this.toApolloError(result);
            Promise.resolve().then(function () {
                if (error_1) {
                    _this.onError(error_1);
                }
                else if (result.data) {
                    _this.onCompleted(result.data);
                }
            }).catch(function (error) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(error);
            });
        }
    };
    InternalState.prototype.toApolloError = function (result) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.isNonEmptyArray)(result.errors)
            ? new _errors_index_js__WEBPACK_IMPORTED_MODULE_14__.ApolloError({ graphQLErrors: result.errors })
            : result.error;
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data, partial = result.partial, resultWithoutPartial = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__rest)(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_12__.__assign)({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
        if (!queryResult.error && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.isNonEmptyArray)(result.errors)) {
            queryResult.error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_14__.ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_6__.NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());
//# sourceMappingURL=useQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncExternalStore": () => (/* binding */ useSyncExternalStore)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");



var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__, 2)))[uSESKey];
var useSyncExternalStore = realHook || (function (subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ &&
        !didWarnUncachedGetSnapshot &&
        value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState({ inst: { value: value, getSnapshot: getSnapshot } }), inst = _a[0].inst, forceUpdate = _a[1];
    if (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseLayoutEffect) {
        react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(function () {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        }, [subscribe, value, getSnapshot]);
    }
    else {
        Object.assign(inst, { value: value, getSnapshot: getSnapshot });
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst: inst });
        }
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        });
    }, [subscribe]);
    return value;
});
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}
//# sourceMappingURL=useSyncExternalStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentType": () => (/* binding */ DocumentType),
/* harmony export */   "operationName": () => (/* binding */ operationName),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "verifyDocumentType": () => (/* binding */ verifyDocumentType)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, 32);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') {
            switch (x.operation) {
                case 'query':
                    queries.push(x);
                    break;
                case 'mutation':
                    mutations.push(x);
                    break;
                case 'subscription':
                    subscriptions.push(x);
                    break;
            }
        }
    }
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 33);
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, 34);
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, 35);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operation.type === type, 36);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": () => (/* binding */ GraphQLError),
/* harmony export */   "formatError": () => (/* binding */ formatError),
/* harmony export */   "printError": () => (/* binding */ printError)
/* harmony export */ });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");




function toNormalizedOptions(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedOptions(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => (0,_language_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(loc.source, loc.start));
    const originalExtensions = (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_1__.isObjectLike)(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printLocation)(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + (0,_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printSourceLocation)(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
    };

    if (this.locations != null) {
      formattedError.locations = this.locations;
    }

    if (this.path != null) {
      formattedError.path = this.path;
    }

    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }

    return formattedError;
  }
}

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */
function printError(error) {
  return error.toString();
}
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */

function formatError(error) {
  return error.toJSON();
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "syntaxError": () => (/* binding */ syntaxError)
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position],
  });
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant)
/* harmony export */ });
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObjectLike": () => (/* binding */ isObjectLike)
/* harmony export */ });
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveLocation": () => (/* binding */ DirectiveLocation)
/* harmony export */ });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation;

(function (DirectiveLocation) {
  DirectiveLocation['QUERY'] = 'QUERY';
  DirectiveLocation['MUTATION'] = 'MUTATION';
  DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
  DirectiveLocation['FIELD'] = 'FIELD';
  DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
  DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
  DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
  DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
  DirectiveLocation['SCHEMA'] = 'SCHEMA';
  DirectiveLocation['SCALAR'] = 'SCALAR';
  DirectiveLocation['OBJECT'] = 'OBJECT';
  DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
  DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
  DirectiveLocation['INTERFACE'] = 'INTERFACE';
  DirectiveLocation['UNION'] = 'UNION';
  DirectiveLocation['ENUM'] = 'ENUM';
  DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
  DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
  DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));


/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer),
/* harmony export */   "isPunctuatorTokenKind": () => (/* binding */ isPunctuatorTokenKind)
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterClasses.mjs */ "./node_modules/graphql/language/characterClasses.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");





/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

class Lexer {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }

  get [Symbol.toStringTag]() {
    return 'Lexer';
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */

  advance() {
    this.lastToken = this.token;
    const token = (this.token = this.lookahead());
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */

  lookahead() {
    let token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          // Read the next token and form a link in the token linked-list.
          const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

          token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT);
    }

    return token;
  }
}
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return (
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE ||
    kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R
  );
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */

function isUnicodeScalarValue(code) {
  return (
    (code >= 0x0000 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0x10ffff)
  );
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */

function isSupplementaryCodePoint(body, location) {
  return (
    isLeadingSurrogate(body.charCodeAt(location)) &&
    isTrailingSurrogate(body.charCodeAt(location + 1))
  );
}

function isLeadingSurrogate(code) {
  return code >= 0xd800 && code <= 0xdbff;
}

function isTrailingSurrogate(code) {
  return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */

function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);

  if (code === undefined) {
    return _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF;
  } else if (code >= 0x0020 && code <= 0x007e) {
    // Printable ASCII
    const char = String.fromCodePoint(code);
    return char === '"' ? "'\"'" : `"${char}"`;
  } // Unicode code point

  return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */

function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_0__.Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */

function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // SourceCharacter

    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 0xfeff: // <BOM>

      case 0x0009: // \t

      case 0x0020: // <space>

      case 0x002c:
        // ,
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"

      case 0x000a:
        // \n
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;

      case 0x000d:
        // \r
        if (body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment

      case 0x0023:
        // #
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

      case 0x0021:
        // !
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BANG, position, position + 1);

      case 0x0024:
        // $
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.DOLLAR, position, position + 1);

      case 0x0026:
        // &
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AMP, position, position + 1);

      case 0x0028:
        // (
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_L, position, position + 1);

      case 0x0029:
        // )
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PAREN_R, position, position + 1);

      case 0x002e:
        // .
        if (
          body.charCodeAt(position + 1) === 0x002e &&
          body.charCodeAt(position + 2) === 0x002e
        ) {
          return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.SPREAD, position, position + 3);
        }

        break;

      case 0x003a:
        // :
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COLON, position, position + 1);

      case 0x003d:
        // =
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EQUALS, position, position + 1);

      case 0x0040:
        // @
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.AT, position, position + 1);

      case 0x005b:
        // [
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_L, position, position + 1);

      case 0x005d:
        // ]
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACKET_R, position, position + 1);

      case 0x007b:
        // {
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_L, position, position + 1);

      case 0x007c:
        // |
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.PIPE, position, position + 1);

      case 0x007d:
        // }
        return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BRACE_R, position, position + 1);
      // StringValue

      case 0x0022:
        // "
        if (
          body.charCodeAt(position + 1) === 0x0022 &&
          body.charCodeAt(position + 2) === 0x0022
        ) {
          return readBlockString(lexer, position);
        }

        return readString(lexer, position);
    } // IntValue | FloatValue (Digit | -)

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(code) || code === 0x002d) {
      return readNumber(lexer, position, code);
    } // Name

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameStart)(code)) {
      return readName(lexer, position);
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      position,
      code === 0x0027
        ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
        : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position)
        ? `Unexpected character: ${printCodePointAt(lexer, position)}.`
        : `Invalid character: ${printCodePointAt(lexer, position)}.`,
    );
  }

  return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */

function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position),
  );
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */

function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false; // NegativeSign (-)

  if (code === 0x002d) {
    code = body.charCodeAt(++position);
  } // Zero (0)

  if (code === 0x0030) {
    code = body.charCodeAt(++position);

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(code)) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Full stop (.)

  if (code === 0x002e) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // E e

  if (code === 0x0045 || code === 0x0065) {
    isFloat = true;
    code = body.charCodeAt(++position); // + -

    if (code === 0x002b || code === 0x002d) {
      code = body.charCodeAt(++position);
    }

    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart

  if (code === 0x002e || (0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameStart)(code)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position,
      )}.`,
    );
  }

  return createToken(
    lexer,
    isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.INT,
    start,
    position,
    body.slice(start, position),
  );
}
/**
 * Returns the new position in the source after reading one or more digits.
 */

function readDigits(lexer, start, firstCode) {
  if (!(0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(firstCode)) {
    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start,
      )}.`,
    );
  }

  const body = lexer.source.body;
  let position = start + 1; // +1 to skip first firstCode

  while ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isDigit)(body.charCodeAt(position))) {
    ++position;
  }

  return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */

function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = '';

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Quote (")

    if (code === 0x0022) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.STRING, start, position + 1, value);
    } // Escape Sequence (\)

    if (code === 0x005c) {
      value += body.slice(chunkStart, position);
      const escape =
        body.charCodeAt(position + 1) === 0x0075 // u
          ? body.charCodeAt(position + 2) === 0x007b // {
            ? readEscapedUnicodeVariableWidth(lexer, position)
            : readEscapedUnicodeFixedWidth(lexer, position)
          : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    } // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.

function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3; // Cannot be larger than 12 chars (\u{00000000}).

  while (size < 12) {
    const code = body.charCodeAt(position + size++); // Closing Brace (})

    if (code === 0x007d) {
      // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }

      return {
        value: String.fromCodePoint(point),
        size,
      };
    } // Append this hex digit to the code point.

    point = (point << 4) | readHexDigit(code);

    if (point < 0) {
      break;
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size,
    )}".`,
  );
}

function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);

  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6,
    };
  } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
  // a valid pair is formed.

  if (isLeadingSurrogate(code)) {
    // \u
    if (
      body.charCodeAt(position + 6) === 0x005c &&
      body.charCodeAt(position + 7) === 0x0075
    ) {
      const trailingCode = read16BitHexCode(body, position + 8);

      if (isTrailingSurrogate(trailingCode)) {
        // JavaScript defines strings as a sequence of UTF-16 code units and
        // encodes Unicode code points above U+FFFF using a surrogate pair of
        // code units. Since this is a surrogate pair escape sequence, just
        // include both codes into the JavaScript string value. Had JavaScript
        // not been internally based on UTF-16, then this surrogate pair would
        // be decoded to retrieve the supplementary code point.
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12,
        };
      }
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`,
  );
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */

function read16BitHexCode(body, position) {
  // readHexDigit() returns -1 on error. ORing a negative value with any other
  // value always produces a negative value.
  return (
    (readHexDigit(body.charCodeAt(position)) << 12) |
    (readHexDigit(body.charCodeAt(position + 1)) << 8) |
    (readHexDigit(body.charCodeAt(position + 2)) << 4) |
    readHexDigit(body.charCodeAt(position + 3))
  );
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */

function readHexDigit(code) {
  return code >= 0x0030 && code <= 0x0039 // 0-9
    ? code - 0x0030
    : code >= 0x0041 && code <= 0x0046 // A-F
    ? code - 0x0037
    : code >= 0x0061 && code <= 0x0066 // a-f
    ? code - 0x0057
    : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */

function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);

  switch (code) {
    case 0x0022:
      // "
      return {
        value: '\u0022',
        size: 2,
      };

    case 0x005c:
      // \
      return {
        value: '\u005c',
        size: 2,
      };

    case 0x002f:
      // /
      return {
        value: '\u002f',
        size: 2,
      };

    case 0x0062:
      // b
      return {
        value: '\u0008',
        size: 2,
      };

    case 0x0066:
      // f
      return {
        value: '\u000c',
        size: 2,
      };

    case 0x006e:
      // n
      return {
        value: '\u000a',
        size: 2,
      };

    case 0x0072:
      // r
      return {
        value: '\u000d',
        size: 2,
      };

    case 0x0074:
      // t
      return {
        value: '\u0009',
        size: 2,
      };
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2,
    )}".`,
  );
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */

function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = '';
  const blockLines = [];

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Triple-Quote (""")

    if (
      code === 0x0022 &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.BLOCK_STRING,
        start,
        position + 3, // Return a string of the lines joined with U+000A.
        (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__.dedentBlockStringLines)(blockLines).join('\n'),
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    } // Escaped Triple-Quote (\""")

    if (
      code === 0x005c &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022 &&
      body.charCodeAt(position + 3) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1; // skip only slash

      position += 4;
      continue;
    } // LineTerminator

    if (code === 0x000a || code === 0x000d) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);

      if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
        position += 2;
      } else {
        ++position;
      }

      currentLine = '';
      chunkStart = position;
      lineStart = position;
      continue;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_3__.syntaxError)(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */

function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position);

    if ((0,_characterClasses_mjs__WEBPACK_IMPORTED_MODULE_2__.isNameContinue)(code)) {
      ++position;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_1__.TokenKind.NAME,
    start,
    position,
    body.slice(start, position),
  );
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation)
/* harmony export */ });
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseConstValue": () => (/* binding */ parseConstValue),
/* harmony export */   "parseType": () => (/* binding */ parseType),
/* harmony export */   "parseValue": () => (/* binding */ parseValue)
/* harmony export */ });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Similar to parseValue(), but raises a parse error if it encounters a
 * variable. The return type will be a constant value.
 */

function parseConstValue(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const value = parser.parseConstValueLiteral();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  const parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF);
  const type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

class Parser {
  constructor(source, options = {}) {
    const sourceObj = (0,_source_mjs__WEBPACK_IMPORTED_MODULE_1__.isSource)(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_1__.Source(source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */

  parseName() {
    const token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);
    return this.node(token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAME,
      value: token.value,
    });
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */

  parseDocument() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DOCUMENT,
      definitions: this.many(
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SOF,
        this.parseDefinition,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF,
      ),
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */

  parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } // Many definitions begin with a description and require a lookahead.

    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription
      ? this._lexer.lookahead()
      : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }

      if (hasDescription) {
        throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are supported only on type definitions.',
        );
      }

      switch (keywordToken.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    }

    throw this.unexpected(keywordToken);
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */

  parseOperationDefinition() {
    const start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
        operation: _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.QUERY,
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    }

    const operation = this.parseOperationType();
    let name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      name = this.parseName();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */

  parseOperationType() {
    const operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.QUERY;

      case 'mutation':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.MUTATION;

      case 'subscription':
        return _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.OperationTypeNode.SUBSCRIPTION;
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */

  parseVariableDefinitions() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L,
      this.parseVariableDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R,
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */

  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)
        ? this.parseConstValueLiteral()
        : undefined,
      directives: this.parseConstDirectives(),
    });
  }
  /**
   * Variable : $ Name
   */

  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.VARIABLE,
      name: this.parseName(),
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */

  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SELECTION_SET,
      selections: this.many(
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
        this.parseSelection,
        _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
      ),
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */

  parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD)
      ? this.parseFragment()
      : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */

  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L)
        ? this.parseSelectionSet()
        : undefined,
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */

  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */

  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst),
    });
  }

  parseConstArgument() {
    return this.parseArgument(true);
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */

  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
      });
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */

  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentName : Name but not `on`
   */

  parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseValueLiteral(isConst) {
    const token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INT,
          value: token.value,
        });

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FLOAT,
          value: token.value,
        });

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME:
        this.advanceLexer();

        switch (token.value) {
          case 'true':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: true,
            });

          case 'false':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.BOOLEAN,
              value: false,
            });

          case 'null':
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NULL,
            });

          default:
            return this.node(token, {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM,
              value: token.value,
            });
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.DOLLAR);

          if (this._lexer.token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`,
            );
          } else {
            throw this.unexpected(token);
          }
        }

        return this.parseVariable();

      default:
        throw this.unexpected();
    }
  }

  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }

  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING,
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */

  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);

    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R),
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */

  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);

    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R),
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */

  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst),
    });
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */

  parseDirectives(isConst) {
    const directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }

  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */

  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
    });
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */

  parseTypeReference() {
    const start = this._lexer.token;
    let type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.LIST_TYPE,
        type: innerType,
      });
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BANG)) {
      return this.node(start, {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NON_NULL_TYPE,
        type,
      });
    }

    return type;
  }
  /**
   * NamedType : Name
   */

  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.NAMED_TYPE,
      name: this.parseName(),
    });
  } // Implements the parsing rules in the Type Definition section.

  peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */

  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */

  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes,
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */

  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type,
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */

  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */

  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */

  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements')
      ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AMP, this.parseNamedType)
      : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */

  parseFieldsDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseFieldDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */

  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives,
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */

  parseArgumentDefs() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_L,
      this.parseInputValueDef,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PAREN_R,
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */

  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }

    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives,
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */

  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */

  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types,
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */

  parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EQUALS)
      ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseNamedType)
      : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */

  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values,
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */

  parseEnumValuesDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */

  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    ) {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token,
        )} is reserved and cannot be used for an enum value.`,
      );
    }

    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */

  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */

  parseInputFieldsDefinition() {
    return this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseInputValueDef,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */

  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */

  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.BRACE_R,
    );

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes,
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */

  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */

  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */

  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */

  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types,
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */

  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values,
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */

  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */

  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations,
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */

  parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */

  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();

    if (Object.prototype.hasOwnProperty.call(_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_6__.DirectiveLocation, name.value)) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */

  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new _ast_mjs__WEBPACK_IMPORTED_MODULE_5__.Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source,
      );
    }

    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */

  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }

    throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`,
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`,
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */

  unexpected(atToken) {
    const token =
      atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`,
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */

  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  }

  advanceLexer() {
    const { maxTokens } = this._options;

    const token = this._lexer.advance();

    if (maxTokens !== undefined && token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_0__.TokenKind.EOF) {
      ++this._tokenCounter;

      if (this._tokenCounter > maxTokens) {
        throw (0,_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_4__.syntaxError)(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`,
        );
      }
    }
  }
}
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */

function getTokenKindDesc(kind) {
  return (0,_lexer_mjs__WEBPACK_IMPORTED_MODULE_2__.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printLocation": () => (/* binding */ printLocation),
/* harmony export */   "printSourceLocation": () => (/* binding */ printSourceLocation)
/* harmony export */ });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");


/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    (0,_location_mjs__WEBPACK_IMPORTED_MODULE_0__.getLocation)(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenKind": () => (/* binding */ TokenKind)
/* harmony export */ });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind;

(function (TokenKind) {
  TokenKind['SOF'] = '<SOF>';
  TokenKind['EOF'] = '<EOF>';
  TokenKind['BANG'] = '!';
  TokenKind['DOLLAR'] = '$';
  TokenKind['AMP'] = '&';
  TokenKind['PAREN_L'] = '(';
  TokenKind['PAREN_R'] = ')';
  TokenKind['SPREAD'] = '...';
  TokenKind['COLON'] = ':';
  TokenKind['EQUALS'] = '=';
  TokenKind['AT'] = '@';
  TokenKind['BRACKET_L'] = '[';
  TokenKind['BRACKET_R'] = ']';
  TokenKind['BRACE_L'] = '{';
  TokenKind['PIPE'] = '|';
  TokenKind['BRACE_R'] = '}';
  TokenKind['NAME'] = 'Name';
  TokenKind['INT'] = 'Int';
  TokenKind['FLOAT'] = 'Float';
  TokenKind['STRING'] = 'String';
  TokenKind['BLOCK_STRING'] = 'BlockString';
  TokenKind['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {}));


/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map