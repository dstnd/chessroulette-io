"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistration = void 0;
var io = require("io-ts");
var resource_1 = require("../../sdk/resource");
var payloads_1 = require("../../payloads");
var http_1 = require("../../sdk/http");
var UserRegistration;
(function (UserRegistration) {
    var model = http_1.formModel({
        email: io.string,
        firstName: io.string,
        lastName: io.string,
        external: io.union([
            io.undefined,
            io.type({
                vendor: payloads_1.externalVendor,
                accessToken: io.string,
            }),
        ]),
    });
    var request = io.type(model);
    var okResponse = io.type({
        // TODO: See if this is needed in this call - it's for ease of access at this point
        // user: userRecord, 
        accessToken: io.string,
    });
    var errResponse = http_1.inputValidationError(model);
    UserRegistration.resource = new resource_1.Resource(request, okResponse, errResponse);
})(UserRegistration = exports.UserRegistration || (exports.UserRegistration = {}));
//# sourceMappingURL=userRegistration.js.map