"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 3600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./refactored-code/mongodb-code.js

const mongodbRequest = async ()=>{
    const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://RudraDas:KyQHvS8dbDDNHMtH@cluster0.lfk6tup.mongodb.net/meetups?retryWrites=true&w=majority"); //connecting to mongo db server
    const meetupCollections = client.db().collection("meetups"); //selecting the database & collections field
    return {
        meetupCollections,
        client
    };
};

;// CONCATENATED MODULE: ./pages/api/new-meetup.js
// url for this api file is /api/new-meetup

const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        const { meetupCollections , client  } = await mongodbRequest();
        const result = await meetupCollections.insertOne(data); // inserting the data
        client.close(); // closing the server
        res.status(201).json({
            message: "Meetup inserted"
        }); //sending message to frontend
    }
};
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3600));
module.exports = __webpack_exports__;

})();