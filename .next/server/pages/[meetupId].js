(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 9395:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetupDetails_details__yaYcQ",
	"back": "MeetupDetails_back___Dnzf"
};


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__(9395);
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js



const MeetupDetails = (props)=>{
    const router = (0,router_.useRouter)();
    const goingBackHandler = ()=>{
        router.push("/");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetails_module_default()).details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (MeetupDetails_module_default()).back,
                onClick: goingBackHandler,
                children: "Back"
            })
        ]
    });
};
/* harmony default export */ const meetups_MeetupDetails = (MeetupDetails);

// EXTERNAL MODULE: ./refactored-code/mongodb-code.js
var mongodb_code = __webpack_require__(6223);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js






const DetailsPage = (props)=>{
    const detailsOfMeetup = props.meetups;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: detailsOfMeetup.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: detailsOfMeetup.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetails, {
                title: detailsOfMeetup.title,
                image: detailsOfMeetup.image,
                address: detailsOfMeetup.address,
                description: detailsOfMeetup.description
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    const { meetupCollections , client  } = await (0,mongodb_code/* mongodbRequest */.m)();
    const meetupData = await meetupCollections.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetupData.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
};
const getStaticProps = async (context)=>{
    const meetupId = context.params.meetupId; //getting from getStaticPaths function
    const { meetupCollections , client  } = await (0,mongodb_code/* mongodbRequest */.m)();
    const detailsOfMeetup = await meetupCollections.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    const meetup = {
        title: detailsOfMeetup.title,
        image: detailsOfMeetup.image,
        address: detailsOfMeetup.address,
        description: detailsOfMeetup.description
    };
    return {
        props: {
            meetups: meetup
        }
    };
};
/* harmony default export */ const _meetupId_ = (DetailsPage);


/***/ }),

/***/ 6223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ mongodbRequest)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const mongodbRequest = async ()=>{
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://RudraDas:KyQHvS8dbDDNHMtH@cluster0.lfk6tup.mongodb.net/meetups?retryWrites=true&w=majority"); //connecting to mongo db server
    const meetupCollections = client.db().collection("meetups"); //selecting the database & collections field
    return {
        meetupCollections,
        client
    };
};


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3730));
module.exports = __webpack_exports__;

})();