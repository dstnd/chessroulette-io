"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
var resource_1 = require("../../sdk/resource");
var userRecord_1 = require("../../records/userRecord");
var GetUser;
(function (GetUser) {
    GetUser.response = userRecord_1.registeredUserRecord;
    GetUser.resource = new resource_1.Resource(resource_1.emptyRequest, GetUser.response);
})(GetUser = exports.GetUser || (exports.GetUser = {}));
//# sourceMappingURL=getUser.js.map