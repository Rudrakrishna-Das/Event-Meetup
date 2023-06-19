"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// url for this api file is /api/new-meetup\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://RudraDas:KyQHvS8dbDDNHMtH@cluster0.lfk6tup.mongodb.net/meetups?retryWrites=true&w=majority\"); //connecting to mongo db server\n        const db = client.db().collection(\"meetups\"); //selecting the database\n        // const meetupCollections = db.; //creating  the collections field\n        const result = await db.insertOne(data); // inserting the data\n        console.log(result);\n        client.close(); // closing the server\n        res.status(201).json({\n            message: \"Meetup inserted\"\n        }); //sending message to frontend\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyQ0FBMkM7QUFFTDtBQUV0QyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBRXJCLE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FDdEMsMEdBQTBHLENBQzNHLEVBQUUsK0JBQStCO1FBQ2xDLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLHdCQUF3QjtRQUN0RSxtRUFBbUU7UUFDbkUsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csU0FBUyxDQUFDUCxJQUFJLENBQUMsRUFBRSxxQkFBcUI7UUFDOURRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztRQUNwQkosTUFBTSxDQUFDUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtRQUNyQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsaUJBQWlCO1NBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQ3JGLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVqQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1cmwgZm9yIHRoaXMgYXBpIGZpbGUgaXMgL2FwaS9uZXctbWVldHVwXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL1J1ZHJhRGFzOkt5UUh2UzhkYkRETkhNdEhAY2x1c3RlcjAubGZrNnR1cC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApOyAvL2Nvbm5lY3RpbmcgdG8gbW9uZ28gZGIgc2VydmVyXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpOyAvL3NlbGVjdGluZyB0aGUgZGF0YWJhc2VcclxuICAgIC8vIGNvbnN0IG1lZXR1cENvbGxlY3Rpb25zID0gZGIuOyAvL2NyZWF0aW5nICB0aGUgY29sbGVjdGlvbnMgZmllbGRcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmluc2VydE9uZShkYXRhKTsgLy8gaW5zZXJ0aW5nIHRoZSBkYXRhXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7IC8vIGNsb3NpbmcgdGhlIHNlcnZlclxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBpbnNlcnRlZFwiIH0pOyAvL3NlbmRpbmcgbWVzc2FnZSB0byBmcm9udGVuZFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();