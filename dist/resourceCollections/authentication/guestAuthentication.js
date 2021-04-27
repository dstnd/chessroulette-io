"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestAuthentication = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var userRecord_1 = require("../../records/userRecord");
var GuestAuthentication;
(function (GuestAuthentication) {
    var request = io.type({
        guestUser: io.union([userRecord_1.guestUserRecord, io.null]),
    });
    var okResponse = io.type({
        guest: userRecord_1.guestUserRecord,
    });
    GuestAuthentication.resource = new resource_1.Resource(request, okResponse);
})(GuestAuthentication = exports.GuestAuthentication || (exports.GuestAuthentication = {}));
//# sourceMappingURL=guestAuthentication.js.map