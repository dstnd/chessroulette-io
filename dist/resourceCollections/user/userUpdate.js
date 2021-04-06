"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdate = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var userRecord_1 = require("../../records/userRecord");
var UserUpdate;
(function (UserUpdate) {
    var request = io.type({
        firstName: io.string,
        lastName: io.string,
        countryCode: io.string,
    });
    var response = userRecord_1.registeredUserRecord;
    UserUpdate.resource = new resource_1.Resource(request, response);
})(UserUpdate = exports.UserUpdate || (exports.UserUpdate = {}));
//# sourceMappingURL=userUpdate.js.map